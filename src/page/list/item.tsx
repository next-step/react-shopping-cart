import { Icon } from "common/ui";
import { ProductItem } from "store/type";
import { Image, ItemInfo, ItemWrapper, Price, Title } from "./style";

type ItemProps = {
  item: ProductItem;
};

const Item = ({ item }: ItemProps) => {
  return (
    <div>
      <Image src={`${item.imageUrl}`} alt="PET 보틀-정사각(420ml)" />
      <ItemWrapper>
        <ItemInfo>
          <Title>PET 보틀-정사각(420ml)</Title>
          <Price>43,000원</Price>
        </ItemInfo>
        <Icon src="assets/svgs/cart.svg" alt="장바구니"/>
      </ItemWrapper>
    </div>
  );
};

export default Item;
