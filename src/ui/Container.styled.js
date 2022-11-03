import styled from 'styled-components';

const Container = styled.main`
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    width: 750px;
  }
  @media only screen and (min-width: 992px) {
    width: 970px;
  }
`;

export default Container;
