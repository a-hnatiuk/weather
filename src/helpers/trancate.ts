export const trancate = (str: string, allowed: number): string =>
  str.length > allowed ? `${str.slice(0, allowed)} ...` : str;
