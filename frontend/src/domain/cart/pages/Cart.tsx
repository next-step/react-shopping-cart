import styled from '@emotion/styled';

import { useCartContext } from '@/context/cart';

export default function Cart() {
  const { items } = useCartContext();

  return (
    <CartContainer>
      <H2>장바구니 목록</H2>
      <ul>
        {items.map(({ id, name, price, imageUrl }) => {
          return (
            <ProductDetailLi key={id}>
              <LeftWing>
                <img src={imageUrl} alt="item" />
              </LeftWing>
              <RightWing>
                <div>{name}</div>
                <div>{price}</div>
              </RightWing>
            </ProductDetailLi>
          );
        })}
      </ul>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  padding: 16px;
`;

const H2 = styled.h2`
  margin-top: 16px;
  font-size: 20px;
`;

const ProductDetailLi = styled.li`
  display: flex;
  margin-top: 16px;
`;

const LeftWing = styled.div`
  img {
    width: 200px;
  }
`;

const RightWing = styled.div``;
