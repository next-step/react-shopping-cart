import { useNavigate } from 'react-router-dom';

export default function useHeaderRouting() {
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

  return {
    moveMainPage,
    moveCartPage,
    moveOrderList
  };
}
