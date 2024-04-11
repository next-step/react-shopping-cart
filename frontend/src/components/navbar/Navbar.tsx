import { useNavigate } from "@tanstack/react-router";
import { ROUTE_PATH } from "../../domain/route";
import Button from "../button/Button";
import FlexCenter from "../flex-center/FlexCenter";

const Navbar = () => {
  const navigate = useNavigate();
  const goToPage = (path: string) => navigate({ to: path });

  return (
    <nav className="nav flex justify-around">
      <FlexCenter>
        <div onClick={() => goToPage(ROUTE_PATH.PRODUCT)}>
          <h1 className="nav-title">CLEAN CODE SHOP</h1>
        </div>
      </FlexCenter>
      <div className="flex gap-15">
        <Button
          type="button"
          className="nav-button"
          onClick={() => goToPage(ROUTE_PATH.CART)}
        >
          장바구니
        </Button>
        <Button
          type="button"
          className="nav-button"
          onClick={() => goToPage(ROUTE_PATH.ORDER_LIST)}
        >
          주문목록
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
