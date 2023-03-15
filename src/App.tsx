import { Header } from './components/molecules';
import './css/index.css';
import { Outlet, useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const moveMainPage = () => {
    navigate('/');
  };
  const moveCartPage = () => {
    navigate('/cart');
  };
  const moveOrderList = () => {
    navigate('/order-list');
  };
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
