import { useMemo, useState } from 'react';

import { OpenBreweryHookResult, OpenBreweryParams } from './types';
import { getURL } from './utils/getURL';

/**
 * @description https://www.openbrewerydb.org/documentation/01-listbreweries
 * @example
 * const { loading, error, data } = useOpenBrewery({ byName: 'new york' });
 */
export const useOpenBrewery = (
  queryParams: OpenBreweryParams = {}
): OpenBreweryHookResult => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  return useMemo(() => {
    setData(undefined);
    setError(undefined);
    setLoading(true);
    fetch(getURL(queryParams))
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return {
      loading,
      error,
      data,
    };
  }, [queryParams.byName]);
};
