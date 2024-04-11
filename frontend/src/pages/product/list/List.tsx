import { ProductType } from "../../../domain/type";

import { useAddCartMutation } from "../../../hooks/useAddCartMutation";
import useProductsQuery from "../../../hooks/useProductsQuery";

import ListItem from "./components/ListItem";

const List = () => {
  const { data } = useProductsQuery();
  const { mutate } = useAddCartMutation();

  const onClick = ({ name, price, imageUrl, id }: ProductType) => {
    mutate({ name, price, imageUrl, id });
    alert("장바구니에 추가되었습니다.");
  };

  return (
    <section className="product-container">
      {data.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClick={onClick}
        />
      ))}
    </section>
  );
};

export default List;
