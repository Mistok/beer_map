import { OpenBrewerySortParam } from '../types';
import { SortDirection } from '../enums';

export const getSortByParams = (params: OpenBrewerySortParam): string =>
  Object.entries(params)
    .map(([paramName, sortDirection]) => {
      return sortDirection === SortDirection.Desc
        ? paramName
        : `${paramName}:${sortDirection}`;
    })
    .join(',');
