import React from 'react';
import { SearchBarStyled } from '../../ui';

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <input type="text" placeholder="Search for GIFs and Memes" />
    </SearchBarStyled>
  );
};

export default SearchBar;
