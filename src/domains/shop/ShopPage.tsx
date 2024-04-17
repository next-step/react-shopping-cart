import { useParams } from "@tanstack/react-router";
import { useProduct } from "../shared/queryHook/products/products.query";
import Button from "../shared/components/primitive/Button/Button";
import {
  buttonBox,
  priceBox,
  productContainer,
  productTitle,
  underline,
} from "./components/ShopProduct/ShopProduct.css";
import { useAddProductToCart } from "../shared/queryHook/carts/carts.query";
import { Product } from "../shared/queryHook/types";
import Text from "../shared/components/primitive/Text/Text";

export default function ShopPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const { data } = useProduct(Number(id));
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

  if (!data?.response) return <></>;

  const { imageUrl, name, price } = data.response;

  return (
    <section className={productContainer}>
      <div>
        <div>
          <img width={570} height={570} src={imageUrl} alt="product image" />
        </div>
        <div className={productTitle}>
          <Text as="title">{name}</Text>
        </div>
        <div className={underline}></div>
        <div className={priceBox}>
          <Text as="body">금액</Text>
          <Text as="subtitle">{`${price.toLocaleString()} 원`}</Text>
        </div>
        <div className={buttonBox}>
          <Button onClick={addToCart(data.response)} appearance="secondary">
            장바구니
          </Button>
        </div>
      </div>
    </section>
  );
}
