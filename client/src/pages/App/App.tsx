import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/common/NavBar';
import { Outlet } from 'react-router-dom';
import { Dialog } from 'components/common/Dialog';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <Dialog />
    </>
  );
}

export default App;
