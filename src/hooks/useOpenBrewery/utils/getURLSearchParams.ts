import { OpenBreweryQueryParams } from '../types';

export const getURLSearchParams = (
  params: OpenBreweryQueryParams
): URLSearchParams => new URLSearchParams(Object.entries(params));
