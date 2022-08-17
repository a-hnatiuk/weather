import { FC, useContext, useEffect, useState, SyntheticEvent } from 'react';
import { Typography, Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { isEmpty } from 'helpers/isEmpty';
import { api, IWeatherItem } from 'helpers/api';
import { getKeyFromDate } from 'helpers/getKeyFromDate';
import { getWeatherIcon } from 'helpers/getWeatherIcon';

import { Coordinates } from 'containers/Context/Coordinates';
import { RouterLinks } from 'components/Routes';
import TabItem, { tabPrefix } from 'components/TabItem';

const extraProps = (index: number) => ({
  id: `${tabPrefix}-tab-${index}`,
  'aria-controls': `${tabPrefix}-tabpanel-${index}`,
});

const DEGREE_SIGN = '\u00b0';

const WeatherForecast: FC = () => {
  const navigate = useNavigate();
  const { coordinates } = useContext(Coordinates);
  const [forecastDailyList, setForecastDailyList] =
    useState<Array<IWeatherItem>>();
  const [value, setValue] = useState<number>(0);
  const [forecastRegion, setForecastRegion] = useState<string>();

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
        <Box>
          <Tabs
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
                {...extraProps(i)}
              />
            ))}
          </Tabs>
          {forecastDailyList.map(
            ({ datetime, weather, min_temp, max_temp }, i) => (
              <TabItem key={getKeyFromDate(datetime)} value={value} index={i}>
                <Box p={2}>
                  {/* TODO add data to render. Add styles */}
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
              </TabItem>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default WeatherForecast;
