import styled from "styled-components";
import { Product as ProductType } from "../../types/product";

interface ProductProps extends Omit<ProductType, "id"> {}

const formatPrice = (price: number) => {
  if (!price) return "0";
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Product({ imageUrl, name, price }: ProductProps) {
  return (
    <ProductContainer>
      <img src={imageUrl} alt={name} />
      <ProductInfoBox>
        <ProductInfo>
          <ProductInfoName>{name}</ProductInfoName>
          <span>{formatPrice(price)}원</span>
        </ProductInfo>
        <img src="svgs/cart.svg" alt="장바구니" />
      </ProductInfoBox>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 300px;
`;

const ProductInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 5px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductInfoName = styled.span`
  font-size: 12px;
`;

export default Product;
