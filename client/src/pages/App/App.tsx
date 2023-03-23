import GlobalStyle from 'styles/GlobalStyle';
import { CartContextProvider } from 'context/Cart';
import { NavBar } from 'components/common/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <CartContextProvider>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </CartContextProvider>
  );
}

export default App;
