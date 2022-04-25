export const MILLESECONDS_IN_SECOND = 1000;
export const SECONDS_IN_MINUTE = 60;
export const MINUTES_IN_HOUR = 60;
export const HOURS_IN_DAY = 24;
export const DAYS_IN_WEEK = 7;
export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
