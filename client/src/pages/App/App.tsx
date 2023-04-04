import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/common/NavBar';
import { Outlet } from 'react-router-dom';
import { Dialog } from 'components/common/Dialog';
import { useDialog } from 'hooks';
function App() {
  const { dialogTitle, isOpenDialog } = useDialog();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Dialog title={dialogTitle} isOpen={isOpenDialog} />
      <Outlet />
    </>
  );
}

export default App;
