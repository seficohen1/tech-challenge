import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-areas:
    'introduction'
    'upload';
`;

const IntroductionSection = styled.section`
  grid-area: 'introduction';

  h1 {
    margin-top: 1rem;
    font-size: large;
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    line-height: 1.3rem;
  }

  span {
    color: var(--secondary);
  }
`;

const UploadSection = styled.section`
  grid-area: 'upload';
  margin-top: 2rem;
`;
export { Main, IntroductionSection, UploadSection };
