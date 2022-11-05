import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Item = styled.article`
  img {
    width: 98%;
  }
`;

export { Grid, Item };
