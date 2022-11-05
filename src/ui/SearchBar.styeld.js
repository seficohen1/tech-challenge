import styled from 'styled-components';

const SearchBarStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;

  padding: 1.1rem;
  background-color: var(--secondary);

  input {
    width: 100%;
    padding: 1rem;
    border: none;
    position: relative;

    ::placeholder {
      font-size: large;
    }
  }
  button {
    position: sticky;
    right: 80px;
    top: 107px;
  }

  @media only screen and (min-width: 768px) {
    button {
      right: 90px;
    }
  }
  @media only screen and (min-width: 851px) {
    button {
      right: 90px;
    }
    @media only screen and (min-width: 1200px) {
      button {
        right: 260px;
      }
    }
  }
`;

export default SearchBarStyled;
