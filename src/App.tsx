import { Outlet } from 'react-router-dom';
import { Header, AppLayout, ContentsLayout } from './components';

function App() {
  return (
    <AppLayout>
      <Header />
      <ContentsLayout>
        <Outlet />
      </ContentsLayout>
    </AppLayout>
  );
}

export default App;
