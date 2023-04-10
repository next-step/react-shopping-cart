import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'common/components';
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
