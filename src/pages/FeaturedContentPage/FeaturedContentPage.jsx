import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useGetAllFilesQuery } from '../../features/api/apiSlice';
import { Grid } from '../../ui';
import GifsItem from './GifItem';
import { Container } from '@nextui-org/react';

import styled from 'styled-components';

const FeaturedContentPage = () => {
  const {
    data: files,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllFilesQuery();
  const renderItem = files?.data.map(({ _id, fileUrl, tag, user, title }) => (
    <GifsItem
      key={_id}
      id={_id}
      fileUrl={fileUrl}
      tag={tag}
      user={user}
      title={title}
    />
  ));

  return (
    <>
      <SearchBar />
      <Container>
        <Title>Featured GIFs and Memes</Title>
        <Grid>{isSuccess ? renderItem : <p>something went worng</p>}</Grid>
      </Container>
    </>
  );
};

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

export default FeaturedContentPage;
