import { OpenBreweryParams } from '../types';
import { getURLSearchParams } from './getURLSearchParams';
import { mapQueryParams } from './mapQueryParams';

const baseURL = 'https://api.openbrewerydb.org/breweries';

export const getURL = (queryParams: OpenBreweryParams) => {
  const url = new URL(baseURL);
  getURLSearchParams(mapQueryParams(queryParams)).forEach((value, key) =>
    url.searchParams.set(key, value)
  );
  return url.toString();
};
