import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Container, Grid } from '../../ui';
import GifsItem from './GifItem';

const FeaturedContentPage = () => {
  return (
    <>
      <SearchBar />
      <Grid>
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
        <GifsItem />
      </Grid>
    </>
  );
};

export default FeaturedContentPage;
