import { Icon } from "common/icon";
import { ProductItem } from "types/type";
import { Image, ItemInfo, ItemWrapper, Price, Title } from "../style";

import cartSvg from 'assets/svgs/cart.svg';
import { printWon } from "common/util";
import { useRouter } from "hooks/useRouter";
import { ROUTE } from "router";

type ItemProps = {
  item: ProductItem;
};

const Item = ({ item }: ItemProps) => {
  const { go }  = useRouter();

  const handleMoveToDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    go(`${ROUTE.PRODUCT_LIST}/${id}`)
  }

  const handleAddCart = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    go(ROUTE.ORDER_LIST)
  }

  return (
    <div onClick={(e) => handleMoveToDetail(e, item.id)}>
      <Image src={`${item.imageUrl}`} alt="PET 보틀-정사각(420ml)" />
      <ItemWrapper>
        <ItemInfo>
          <Title>{item.name}</Title>
          <Price>{printWon(item.price)}</Price>
        </ItemInfo>
        <Icon src={cartSvg} alt="장바구니" onClick={(e) => handleAddCart(e)}/>
      </ItemWrapper>
    </div>
  );
};

export default Item;
