import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/products");
  };
  const handleClickCart = () => {
    navigate("/cart");
  };

  const handleClickOrder = () => {
    navigate("/order");
  };

  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <h1 className="nav-title" onClick={handleClickHome}>
          CLEAN CODE SHOP
        </h1>
      </div>
      <div className="flex gap-15">
        <button className="nav-button" onClick={handleClickCart}>
          장바구니
        </button>
        <button className="nav-button" onClick={handleClickOrder}>
          주문목록
        </button>
      </div>
    </nav>
  );
}
