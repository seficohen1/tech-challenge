import styled from 'styled-components';

const SearchBarStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  border: 1px solid blue;
  padding: 1.1rem;
  background-color: var(--secondary);

  input {
    width: 100%;
    padding: 1rem;
    border: none;

    ::placeholder {
      font-size: large;
    }
  }
`;

export default SearchBarStyled;
