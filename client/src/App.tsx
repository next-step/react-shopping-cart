import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import Routes from 'routes';
import { CartContextProvider } from 'context/Cart';

function App() {
  return (
    <CartContextProvider>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </CartContextProvider>
  );
}

export default App;
