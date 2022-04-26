import cns from 'classnames';
import { useInitI18n } from './hooks/useInitI18n';
import cn from './styles.module.scss';

import { MyMap } from '../MyMap/MyMap';
import { MyInput } from '../MyInput';
import React, { useState } from 'react';
import { useOpenBrewery } from '../../hooks/useOpenBrewery';
import { BreweryType } from '../../hooks/useOpenBrewery/enums';

export const App = () => {
  const { loading: loadingLocalization } = useInitI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const { loading: loadingBrewery, data: breweries } = useOpenBrewery({
    byType: BreweryType.Regional,
    byName: searchQuery,
  });

  const onValueChange = (value) => setSearchQuery(value);
  console.log(searchQuery);
  const loading = loadingLocalization || loadingBrewery;

  return (
    <div className={cns(cn.app)}>
      <MyInput onValueChange={onValueChange} />
      {loading ? 'Loading...' : <MyMap breweries={breweries} />}
    </div>
  );
};
