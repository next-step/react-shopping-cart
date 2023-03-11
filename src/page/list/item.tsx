import { ItemInfo, ItemWrapper, Price, Title } from "./style";

const Item = () => {
  return (
    <div>
      <img
        src="../../../public/assets/images/product.png"
        alt="PET 보틀-정사각(420ml)"
      />
      <ItemWrapper>
        <ItemInfo>
          <Title>PET 보틀-정사각(420ml)</Title>
          <Price>43,000원</Price>
        </ItemInfo>
        <img src="../../../public/assets/svgs/cart.svg" alt="장바구니" />
      </ItemWrapper>
    </div>
  );
};

export default Item;
