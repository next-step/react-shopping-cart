import { Link } from "@tanstack/react-router";
import ProductCard from "../shared/components/domained/ProductCard/ProductCard";
import { useAddProductToCart } from "../shared/queryHook/carts/carts.query";
import { useProducts } from "../shared/queryHook/products/products.query";
import { Product } from "../shared/queryHook/types";
import {
  alinkReset,
  products,
  productsContainer,
  shopsPage,
} from "./ShopsPage.css";

export default function ShopsPage() {
  const { data } = useProducts();
  const { mutate } = useAddProductToCart();

  function addToCart(product: Product) {
    return function () {
      mutate(product, {
        onSuccess() {
          alert("장바구니에 담았습니다.");
        },
      });
    };
  }

  return (
    <div className={shopsPage}>
      <div className={productsContainer}>
        <div className={products}>
          {data?.response.map((product) => {
            return (
              <Link
                key={product.id}
                className={alinkReset}
                to="/shops/$id"
                params={{ id: product.id.toFixed() }}
              >
                <ProductCard
                  onAddClick={addToCart(product)}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  title={product.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
