import { BreweryType, SortDirection } from './enums';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export type OpenBrewerySortDirection = SortDirection.Asc | SortDirection.Desc;

export interface OpenBrewerySortParam {
  [paramName: string]: OpenBrewerySortDirection;
}

export interface OpenBreweryParams {
  byCity?: string;
  byCoordinates?: Coordinates;
  byName?: string;
  byState?: string;
  byPostal?: string;
  byType?: BreweryType;
  page?: number;
  pageListItemCount?: number;
  sort?: OpenBrewerySortParam;
}

export interface OpenBreweryQueryParams {
  // =san%20diego, =san_diego
  by_city?: string;
  // =38.8977,77.0365
  by_dist?: string;
  // =modern%20times
  by_name?: string;
  // =new%20mexico
  by_state?: string;
  // =44107, =44107-4020, =44107_4020
  by_postal?: string;
  // =micro
  by_type?: string;
  // =3
  page?: string;
  // =25
  per_page?: string;
  // =type,name:asc, =name:desc
  sort?: string;
}

export interface OpenBreweryHookResult {
  loading: boolean;
  error: Error;
  data: Brewery[];
}

export interface Brewery {
  id: number;
  name: string;
  brewery_type: string;
  street?: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state: string;
  county_province?: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
}
