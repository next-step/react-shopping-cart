import { Icon } from "common/icon";
import { ProductItem } from "types/type";
import { Image, ItemInfo, ItemWrapper, Price, Title } from "../style";

import cartSvg from "assets/svgs/cart.svg";
import { printWon } from "common/util";
import { useRouter } from "hooks/useRouter";
import { ROUTE } from "router";
import { handleModal } from "common/modal";

type ItemProps = {
  item: ProductItem;
};

const Item = ({ item }: ItemProps) => {
  const { go } = useRouter();

  const handleMoveToDetail = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    go(`${ROUTE.PRODUCT_LIST}/${id}`);
  };

  const handleAddCart = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();

    handleModal({
      title: "장바구니에 추가되었습니다",
      message: "해당 페이지로 이동하시겠습니까?",
      onConfirm: () => go(ROUTE.ORDER_LIST),
    });
  };

  return (
    <div onClick={(e) => handleMoveToDetail(e, item.id)}>
      <Image src={`${item.imageUrl}`} alt="PET 보틀-정사각(420ml)" />
      <ItemWrapper>
        <ItemInfo>
          <Title>{item.name}</Title>
          <Price>{printWon(item.price)}</Price>
        </ItemInfo>
        <Icon src={cartSvg} alt="장바구니" onClick={(e) => handleAddCart(e)} />
      </ItemWrapper>
    </div>
  );
};

export default Item;
