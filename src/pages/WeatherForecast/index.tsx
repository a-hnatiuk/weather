import { FC, useContext, useEffect, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Tabs, Button, Container } from '@mui/material';

import { isEmpty } from 'helpers/isEmpty';
import { api, IWeatherItem } from 'helpers/api';
import { getKeyFromDate, getWeatherIcon } from 'helpers/weather';
import { mediaQueryUp } from 'helpers/mediaQueryUp';

import Back from 'icons/Back';
import { Coordinates } from 'containers/Context/Coordinates';
import { RouterLinks } from 'components/Routes';
import TabItem, { tabPrefix } from 'components/TabItem';
import Title from 'pages/WeatherForecast/components/Title';
import TitleSmall from 'pages/WeatherForecast/components/TitleSmall';
import { StyledIcon } from 'containers/StyledIcon';

import * as S from 'pages/WeatherForecast/styled';
import Loader from 'icons/Loader';

const extraProps = (index: number) => ({
  id: `${tabPrefix}-tab-${index}`,
  'aria-controls': `${tabPrefix}-tabpanel-${index}`,
});

const DEGREE_SIGN = '\u00b0';

const WeatherForecast: FC = () => {
  const navigate = useNavigate();
  const desktop = mediaQueryUp('lg');
  const { coordinates } = useContext(Coordinates);
  const [forecastDailyList, setForecastDailyList] =
    useState<Array<IWeatherItem>>();
  const [value, setValue] = useState<number>(0);
  const [forecastRegion, setForecastRegion] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const SLoader = StyledIcon(Loader);

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
          setIsLoading(false);
        }
      });
    }
  }, []);

  const backHandler = () => navigate(RouterLinks.home, { replace: true });

  return isLoading ? (
    <SLoader absolute spin />
  ) : (
    <>
      <S.StyledContainer maxWidth="xl">
        <Button
          onClick={backHandler}
          variant="contained"
          startIcon={<Back fontSize="medium" />}
        >
          Back
        </Button>
        <Typography variant="h1" align="center" mb={6} mt={2}>
          Wheather {forecastRegion && ` in  ${forecastRegion}`}
        </Typography>
      </S.StyledContainer>
      {forecastDailyList && forecastDailyList.length > 0 && (
        <>
          {desktop && (
            <Container maxWidth="xl">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="weather forecast tabs"
              >
                {forecastDailyList.map((item, i) => (
                  <S.StyledTab
                    key={getKeyFromDate(item.datetime)}
                    label={<Title dateString={item.datetime} />}
                    {...extraProps(i)}
                  />
                ))}
              </Tabs>
            </Container>
          )}
          {forecastDailyList.map(
            ({ datetime, weather, min_temp, max_temp }, i) => (
              <div key={getKeyFromDate(datetime)}>
                {!desktop && <TitleSmall dateString={datetime} />}
                <TabItem value={value} index={i}>
                  <Container maxWidth="xl">
                    <S.StyledBox p={2}>
                      <img
                        className="icon"
                        src={getWeatherIcon(weather.icon)}
                        alt={weather.description}
                      />
                      <Typography className="temp" fontWeight={400}>
                        {`${min_temp}${DEGREE_SIGN} ... ${max_temp}${DEGREE_SIGN}`}
                      </Typography>
                    </S.StyledBox>
                  </Container>
                </TabItem>
              </div>
            )
          )}
        </>
      )}
    </>
  );
};

export default WeatherForecast;
