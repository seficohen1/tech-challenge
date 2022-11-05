import { Container, GlobalStyle } from './ui';
import Router from './routes/Router';
import { Navbar } from './components/Navbar';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <GlobalStyle />
      <Navbar />
      <Router />
    </NextUIProvider>
  );
}

export default App;
