import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: 1px solid var(--primary);
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  border-radius: 3px;
`;

const NavButton = styled(ButtonStyled)`
  background-color: ${({ login }) => !login && 'var(--primary)'};
  color: ${({ login }) => !login && 'var(--secondary)'};
  border: ${({ login }) => login && '1px solid var(--secondary)'};
`;

export { ButtonStyled, NavButton };
