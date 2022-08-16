import { useContext, useEffect, useState, SyntheticEvent } from 'react';
import { Typography, Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Coordinates } from '../../containers/Context/Coordinates';
import { RouterLinks } from '../../components/Routes';
import TabBodyItem, {
  tabPrefix,
} from '../../components/TabBodyItem/TabBodyItem';

import { isEmpty } from '../../helpers/isEmpty';
import { api, IWeatherItem } from '../../helpers/api';
import { getKeyFromDate } from '../../helpers/getKeyFromDate';
import { getWeatherIcon } from '../../helpers/getWeatherIcon';

const a11yProps = (index: number) => ({
  id: `${tabPrefix}-tab-${index}`,
  'aria-controls': `${tabPrefix}-tabpanel-${index}`,
});

const DEGREE_SIGN = '\u00b0';

const WeatherForecast = () => {
  const { coordinates } = useContext(Coordinates);
  const [forecastDailyList, setForecastDailyList] =
    useState<Array<IWeatherItem>>();
  const [forecastRegion, setForecastRegion] = useState<string>();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isEmpty(coordinates)) {
      navigate(RouterLinks.home, { replace: true });
    } else {
      const forecast = api.forecast.getDaily(coordinates!);
      forecast.then((rsp) => {
        if (rsp) {
          const { data, country_code, city_name } = rsp;
          setForecastDailyList(data);
          setForecastRegion(`${city_name} (${country_code})`);
        }
      });
    }
  }, []);
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" align="center">
        Wheather {forecastRegion && ` in  ${forecastRegion}`}
      </Typography>
      {forecastDailyList && forecastDailyList.length > 0 && (
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            height: '70vh',
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="weather forecast tabs"
          >
            {forecastDailyList.map((item, i) => (
              <Tab
                key={getKeyFromDate(item.datetime)}
                label={item.datetime}
                {...a11yProps(i)}
              />
            ))}
          </Tabs>
          {forecastDailyList.map(
            ({ datetime, weather, min_temp, max_temp }, i) => (
              <TabBodyItem
                key={getKeyFromDate(datetime)}
                value={value}
                index={i}
              >
                <Box p={2}>
                  <div className="icon">
                    <img
                      src={getWeatherIcon(weather.icon)}
                      alt={weather.description}
                    />
                  </div>
                  <div className="temp">
                    <strong>{`${min_temp}${DEGREE_SIGN} ... ${max_temp}${DEGREE_SIGN}`}</strong>
                  </div>
                </Box>
              </TabBodyItem>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default WeatherForecast;
