import React, { useState, useMemo } from 'react';
import debounce from 'lodash/debounce';
import './myInput.scss';

export const MyInput = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value); // local

    debouncedHandleChange(e);
  };
  const changeRequestQuery = (e) => {
    props.onValueChange(e.target.value); // from props
  };
  const debouncedHandleChange = useMemo(() => {
    return debounce(changeRequestQuery, 300);
  }, []);
  return (
    <input
      className={'my_input'}
      type="text"
      value={searchValue}
      onChange={handleChange}
    />
  );
};
