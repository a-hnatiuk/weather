import axios from 'axios';
import { ICoordinates } from '../containers/Context/Coordinates';

const baseUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHER_API_KEY}`;

const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
});

export interface IWeatherItem {
  ['clouds_low']: number;
  ['clouds_hi']: number;
  datetime: string;
  rh: number;
  weather: {
    icon: string;
    description: string;
  };
  pres: number;
  pop: number;
  ozone: number;
  ['max_temp']: number;
  ['min_temp']: number;
  ['wind_cdir_full']: string;
  ['wind_spd']: number;
  ['app_max_temp']: number;
  ['app_min_temp']: number;
  ['moonrise_ts']: number;
  ['moonset_ts']: number;
  ['sunrise_ts']: number;
  ['sunset_ts']: number;
  ['moon_phase_lunation']: number;
}

export interface IWeatherResponse {
  ['country_code']: string;
  ['city_name']: string;
  data?: IWeatherItem[];
}

export const api = {
  forecast: {
    async getDaily(params: ICoordinates) {
      const { data, status } = await instance.get('', { params });
      if (status === 200) {
        return data;
      }
      return null;
    },
  },
};
