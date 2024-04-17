import Button from "../../shared/components/primitive/Button/Button";
import DecisionPriceBox from "../../shared/components/domained/DecisionPriceBox/DecisionPriceBox";
import ProductRowCard from "../../shared/components/domained/ProductRowCard/ProductRowCard";

import useCarts from "../hooks/useCarts";
import {
  buttonBox,
  cartContainer,
  container,
  decisionBox,
  list,
  listContainer,
  listNavBox,
  listTitle,
  section,
  titleContainer,
  underLine,
} from "./CartsPage.css";
import Text from "../../shared/components/primitive/Text/Text";

export default function CartsPage() {
  const {
    carts,
    unCheckAll,
    createCheckProductFunction,
    changeQuantity,
    totalPrice,
    checkedAtLeast,
  } = useCarts();

  return (
    <main className={container}>
      <section className={section}>
        <div className={titleContainer}>
          <Text as="subtitle">장바구니</Text>
        </div>
        <div className={underLine}></div>
        <div className={cartContainer}>
          <div className={listContainer}>
            <div className={listNavBox}>
              <div>
                <input
                  checked={checkedAtLeast}
                  type="checkbox"
                  onChange={unCheckAll}
                />{" "}
                선택해제
              </div>
              <div className={buttonBox}>
                <Button appearance="outline">상품삭제</Button>
              </div>
            </div>
            <div className={listTitle}>든든배송 상품 (3개)</div>
            <div className={underLine}></div>
            <div className={list}>
              {carts.map(({ product, checked }, index) => {
                return (
                  <ProductRowCard
                    onChangeQuanity={changeQuantity(index)}
                    onCheck={createCheckProductFunction(index)}
                    checked={checked}
                    key={product.id}
                    productImgUrl={product.imageUrl}
                    title={product.name}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
          <div className={decisionBox}>
            <DecisionPriceBox
              title="결제예상금액"
              subtitle="결제예상금액"
              price={totalPrice}
              buttonText={`주문하기(${carts.length}개)`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
