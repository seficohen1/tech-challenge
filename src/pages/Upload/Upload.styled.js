import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-areas:
    'introduction '
    'upload';
  background: rgb(9, 78, 157);
  background: linear-gradient(
    5deg,
    rgba(9, 78, 157, 0.3533788515406162) 0%,
    rgba(253, 29, 29, 0) 50%,
    rgba(69, 252, 244, 0) 90%
  );
`;

const IntroductionSection = styled.section`
  grid-area: 'introduction';
  padding: 2rem;

  h1 {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 4rem;
  }

  p {
    margin-top: 1rem;
    line-height: 1.3rem;
  }

  span {
    color: var(--secondary);
    font-weight: bold;
  }
`;

const UploadSection = styled.section`
  grid-area: 'upload';
  margin-top: 2rem;
`;
export { Main, IntroductionSection, UploadSection };
