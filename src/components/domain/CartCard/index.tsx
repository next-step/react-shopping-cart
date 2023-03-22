import { Button, LazyImage, Text } from '@/components/common';
import CheckBox, { useCheckBox } from '@/components/common/CheckBox';

type Props = {
  cart?: Product;
};

const CartCard = ({ cart }: Props) => {
  const { checked, toggleCheck } = useCheckBox();

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <CheckBox checked={checked} onClick={toggleCheck} />;
        <LazyImage
          className="w-144 h-144"
          src="./assets/images/product.png"
          alt="PET보틀-정사각(420ml)"
        />
        <Text className="cart-name">PET보틀-정사각(420ml)</Text>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
        />
        <div className="number-input-container">
          <input type="number" className="number-input" value="1" />
          <div>
            <Button type="number">▲</Button>
            <Button type="number">▼</Button>
          </div>
        </div>
        <Text className="cart-price">123,456원</Text>
      </div>
    </div>
  );
};

export default CartCard;
