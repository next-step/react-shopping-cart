import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/common/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
