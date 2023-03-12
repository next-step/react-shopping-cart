import styled from "styled-components";

function Product() {
  return (
    <div>
      <img src="images/product.png" alt="PET보틀-정사각(420ml)" />
      <ProductInfoBox>
        <ProductInfo>
          <ProductInfoName>PET보틀-정사각(420ml)</ProductInfoName>
          <span>43,000원</span>
        </ProductInfo>
        <img src="svgs/cart.svg" alt="장바구니" />
      </ProductInfoBox>
    </div>
  );
}

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
