import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return <input type="text" placeholder="Search..." onChange={handleSearch} />;
};

export default SearchBar;
