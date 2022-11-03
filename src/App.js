import { Container, GlobalStyle } from './ui';
import Router from './routes/Router';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Router />
      </Container>
    </>
  );
}

export default App;
