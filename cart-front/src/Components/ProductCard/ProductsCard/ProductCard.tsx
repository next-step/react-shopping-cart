import Card from "../../../ComponentsPrototype/Card/Card";
import { ProductCardFooter } from "./ProductCardFooter/ProductCardFooter";
import { ProductCardBody } from "./ProductCardBody/ProductCardBody";
import { Product } from "../../../Types/types";

export const ProductCard = ({ name, price, imageUrl, id }: Product) => {
  return (
    <Card>
      <ProductCardBody imageUrl={imageUrl} id={id.toString()} />
      <ProductCardFooter
        name={name}
        price={price}
        imageUrl={imageUrl}
        id={id}
      />
    </Card>
  );
};
