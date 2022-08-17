import { FC, useContext, useEffect, useState, SyntheticEvent } from 'react';
import { Typography, Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { isEmpty } from 'helpers/isEmpty';
import { api, IWeatherItem } from 'helpers/api';
import { getKeyFromDate, getWeatherIcon, dateFormat } from 'helpers/weather';
import { mqUp } from 'helpers/mqUp';

import { Coordinates } from 'containers/Context/Coordinates';
import { RouterLinks } from 'components/Routes';
import TabItem, { tabPrefix } from 'components/TabItem';
import Title from 'pages/WeatherForecast/components/Title';
import TitleSmall from 'pages/WeatherForecast/components/TitleSmall';

const StyledBox = styled(Box)`
  background-color: transparent;
  ${(props) => props.theme.breakpoints.down('lg')} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    .icon {
      width: 60px;
      height: 60px;
      margin-right: 60px;
    }
    .temp {
      font-size: 24px;
    }
  }
`;

const extraProps = (index: number) => ({
  id: `${tabPrefix}-tab-${index}`,
  'aria-controls': `${tabPrefix}-tabpanel-${index}`,
});

const DEGREE_SIGN = '\u00b0';

const WeatherForecast: FC = () => {
  const navigate = useNavigate();
  const desktop = mqUp('lg');
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
      <Typography variant="h3" align="center" mb={6} mt={2}>
        Wheather {forecastRegion && ` in  ${forecastRegion}`}
      </Typography>
      {forecastDailyList && forecastDailyList.length > 0 && (
        <Box>
          {desktop && (
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
                  label={<Title dateString={item.datetime} />}
                  {...extraProps(i)}
                />
              ))}
            </Tabs>
          )}
          {forecastDailyList.map(
            ({ datetime, weather, min_temp, max_temp }, i) => (
              <div key={getKeyFromDate(datetime)}>
                {!desktop && <TitleSmall dateString={datetime} />}
                <TabItem value={value} index={i}>
                  <StyledBox p={2}>
                    {/* TODO add data to render. Add styles */}
                    <img
                      className="icon"
                      src={getWeatherIcon(weather.icon)}
                      alt={weather.description}
                    />
                    <div className="temp">
                      <strong>{`${min_temp}${DEGREE_SIGN} ... ${max_temp}${DEGREE_SIGN}`}</strong>
                    </div>
                  </StyledBox>
                </TabItem>
              </div>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default WeatherForecast;
