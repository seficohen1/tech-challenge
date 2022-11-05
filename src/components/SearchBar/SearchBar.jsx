import React, { useState, useEffect } from 'react';
import {
  useGetAllFilesQuery,
  useGetSearchResultsQuery,
} from '../../features/api/apiSlice';
import { SearchBarStyled } from '../../ui';
import axios from 'axios';
import {
  getAllResults,
  selectResultsByTag,
  selectResultsByTitle,
} from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { data } = useGetSearchResultsQuery(query);
  const dispatch = useDispatch();
  const title = useSelector(selectResultsByTitle);
  const tag = useSelector(selectResultsByTag);
  console.log(data);
  useEffect(() => {
    if (data) {
      dispatch(
        getAllResults({
          resultsByTitle: data.data.resultsByTitle,
          resultsByTags: data.data.resultsByTags,
          resultByUser: data.data.resultByUser,
        }),
      );
    }
  }, [data]);

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
