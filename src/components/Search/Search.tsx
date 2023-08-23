import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import '../../scss/components/_search.scss';

import { setSearchValue } from '../../redux/slices/filterSlice.ts';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [localValue, setLocalValue] = useState('');

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      dispatch(setSearchValue((event.target as HTMLInputElement).value));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className='search__wrapper'>
      <svg
        className='icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
        width='50px'
        height='50px'
      >
        <path d='M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z' />
      </svg>
      <input
        type='text'
        placeholder='type here...'
        className='input__serach'
        value={localValue}
        onChange={onChangeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default Search;
