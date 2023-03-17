import { Icon } from "common/ui";
import { ProductItem } from "types/type";
import { Image, ItemInfo, ItemWrapper, Price, Title } from "./style";

import cartSvg from 'assets/svgs/cart.svg';
import { printWon } from "common/util";
import { useRouter } from "hooks/useRouter";
import { ROUTE } from "router";

type ItemProps = {
  item: ProductItem;
};

const Item = ({ item }: ItemProps) => {
  const { go }  = useRouter();
  return (
    <div>
      <Image src={`${item.imageUrl}`} alt="PET 보틀-정사각(420ml)" />
      <ItemWrapper>
        <ItemInfo onClick={() => go(`${ROUTE.PRODUCT_LIST}/${item.id}`)}>
          <Title>{item.name}</Title>
          <Price>{printWon(item.price)}</Price>
        </ItemInfo>
        <Icon src={cartSvg} alt="장바구니"/>
      </ItemWrapper>
    </div>
  );
};

export default Item;
