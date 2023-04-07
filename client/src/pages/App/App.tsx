import GlobalStyle from 'styles/GlobalStyle';
import { NavBar, Dialog } from 'common/components';
import { Outlet } from 'react-router-dom';
import { useDialog } from 'common/hooks';
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
