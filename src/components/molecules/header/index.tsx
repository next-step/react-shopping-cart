import { useNavigate } from 'react-router-dom';

export default function Header() {
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
    <header className="nav flex justify-around">
      <div className="flex-center">
        <h1 className="nav-title" onClick={moveMainPage}>CLEAN CODE SHOP</h1>
      </div>
      <div className="flex gap-15">
        <button className="nav-button" onClick={moveCartPage}>장바구니</button>
        <button className="nav-button" onClick={moveOrderList}>주문목록</button>
      </div>
    </header>
  );
}
