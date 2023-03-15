import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import Routes from 'routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </>
  );
}

export default App;
