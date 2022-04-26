import { OpenBreweryParams, OpenBreweryQueryParams } from '../types';
import { getSortByParams } from './getSortByParams';

export const mapQueryParams = ({
  byCity,
  byCoordinates,
  byName,
  byState,
  byPostal,
  byType,
  page,
  pageListItemCount,
  sort,
}: OpenBreweryParams = {}): OpenBreweryQueryParams => {
  const queryParams: OpenBreweryQueryParams = {};

  if (byCity) {
    queryParams.by_city = byCity;
  }

  if (byCoordinates) {
    queryParams.by_dist = `${byCoordinates.latitude},${byCoordinates.longitude}`;
  }

  if (byName) {
    queryParams.by_name = byName;
  }

  if (byState) {
    queryParams.by_state = byState;
  }

  if (byPostal) {
    queryParams.by_postal = byPostal;
  }

  if (byType) {
    queryParams.by_type = byType;
  }

  if (page) {
    queryParams.page = page.toString();
  }

  if (pageListItemCount) {
    queryParams.per_page = pageListItemCount.toString();
  }

  if (sort) {
    queryParams.sort = getSortByParams(sort);
  }

  return queryParams;
};
