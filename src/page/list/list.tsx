import Item from "./item";
import { ProductContainer } from "./style";

const ProductListPage = () => {
  return (
    <ProductContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
        return <Item />;
      })}
    </ProductContainer>
  );
};

export default ProductListPage;
