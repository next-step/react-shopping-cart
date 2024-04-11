import { MouseEvent, useEffect, useState } from "react";
import CheckBox from "../../../components/checkbox/CheckBox";
import Container from "../../../components/container/Container";
import Input from "../../../components/input/Input";
import { ProductType } from "../../../domain/type";
import { OPERATOR } from "../Cart";
import CountButton from "./CountButton";
import TrashIcon from "./TrashIcon";
import { isMinVaildate } from "../util/validate";
import { useCounter } from "../hooks/useCounter";
import Flex from "../../../components/flex/Flex";

interface CartListProps {
  product: ProductType;
  checked: boolean;
  handleTotalPrice: ({
    price,
    operator,
  }: {
    price: number;
    operator?: string;
  }) => void;
  handleTotalCount: (count: number) => void;
}

const CartList = ({
  product,
  checked,
  handleTotalPrice,
  handleTotalCount,
}: CartListProps) => {
  const { name, price = 0, imageUrl } = product;
  const { count, increase, decrease } = useCounter();

  const [isChecked, setIsChecked] = useState(checked);
  const handleChecked = (e: MouseEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    setIsChecked(checked);

    const totalPrice = checked ? price * count : -(price * count);
    handleTotalPrice({ price: totalPrice });

    const totalCount = checked ? count : -count;
    handleTotalCount(totalCount);
  };

  const handleIncrease = () => {
    increase();

    if (!isChecked) return;
    handleTotalPrice({ price, operator: OPERATOR.PLUS });
    handleTotalCount(1);
  };

  const handleDecrease = () => {
    if (isMinVaildate(count)) return;
    decrease();

    if (!isChecked) return;
    handleTotalPrice({ price, operator: OPERATOR.MINUS });
    handleTotalCount(-1);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <Container className="cart-container">
        <Flex className="gap-15 mt-10">
          <CheckBox checked={isChecked} onClick={handleChecked} />
          <img className="w-144 h-144" src={imageUrl} alt={name} />
          <span className="cart-name">{name}</span>
        </Flex>
        <div className="flex-col-center justify-end gap-15">
          <TrashIcon />
          <Container className="number-input-container">
            <Input
              type="number"
              className="number-input"
              value={count}
              readOnly
            />
            <CountButton increase={handleIncrease} decrease={handleDecrease} />
          </Container>
          <span className="cart-price">{`${(price * count)?.toLocaleString()}원`}</span>
        </div>
      </Container>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};
export default CartList;
