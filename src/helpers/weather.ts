export const getWeatherIcon = (code: string): string => `
https://www.weatherbit.io/static/img/icons/${code}.png
`;

export const getKeyFromDate = (date: string): number =>
  new Date(date).getTime();

export const dateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const locale = 'en-US'; // prepared for i18n

  return {
    day: date.toLocaleDateString(locale, { weekday: 'long' }),
    dayShort: date.toLocaleDateString(locale, { weekday: 'short' }),
    month: new Intl.DateTimeFormat(locale, { month: 'long' }).format(date),
    date: date.getDate(),
  };
};
