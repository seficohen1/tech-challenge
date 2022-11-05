import React, { useState, useEffect } from 'react';
import {
  useGetAllFilesQuery,
  useSearchMutation,
} from '../../features/api/apiSlice';
import { SearchBarStyled } from '../../ui';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [search] = useSearchMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:4000/search',
        {
          body: { query },
        },
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      )
      .then((res) => console.log(res));
  };

  const {
    data: files,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllFilesQuery();
  const array = [];

  return (
    <form onSubmit={handleSubmit} method="POST">
      <SearchBarStyled>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for GIFs and Memes"
          id="query"
        />
        {/* <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button> */}
      </SearchBarStyled>
    </form>
  );
};

export default SearchBar;
