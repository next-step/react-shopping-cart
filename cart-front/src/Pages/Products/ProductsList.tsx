import { Product, Products } from "../../Types/types";
import { ProductCard } from "../../Components/ProductCard/ProductsCard/ProductCard";
import Flex from "../../ComponentsPrototype/Layout/Flex";
export const ProductsList = ({ products }: Products) => {
  if (products.length === 0) return <>NO PRODUCTS</>;
  return (
    <Flex className="grid grid-cols-4 gap-4">
      {products.map((product: Product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          key={product.id}
        />
      ))}
    </Flex>
  );
};
