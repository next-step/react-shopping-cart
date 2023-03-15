import { Header } from './components/molecules';
import './css/index.css';
import { Outlet } from 'react-router-dom';
import useHeaderRouting from './components/molecules/header/hooks';

export default function App() {
  const { moveMainPage, moveCartPage, moveOrderList } = useHeaderRouting();

  return (
    <div>
      <Header
        onClickLogo={moveMainPage}
        onClickCart={moveCartPage}
        onClickOrder={moveOrderList}
      />
      <Outlet/>
    </div>
  );
}
