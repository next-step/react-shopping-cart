import { Link } from "@tanstack/react-router";
import { ROUTE_PATH } from "../../../../domain/route";
import { ProductType } from "../../../../domain/type";
import CartIcon from "./CartIcon";
import ProductInfo from "./ProductInfo";

type ListItemProps = ProductType & {
  onClick: ({ name, price, imageUrl, id }: ProductType) => void;
};

const ListItem = ({ id, name, price, imageUrl, onClick }: ListItemProps) => {
  const addCartList = () => onClick({ name, price, imageUrl, id });

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <Link to={ROUTE_PATH.PRODUCT_DETAIL} params={{ id: String(id) }}>
          <ProductInfo name={name} price={price} />
        </Link>
        <CartIcon onClick={addCartList} />
      </div>
    </div>
  );
};

export default ListItem;
