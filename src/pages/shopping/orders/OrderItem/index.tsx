import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import Title from 'components/Title';
import Item from 'pages/shopping/components/Item';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CartItem } from 'types/cart';

interface OrderItemProps {
  item: CartItem;
}

const OrderItem = ({ item }: OrderItemProps) => {
  const { colors } = useContext(ThemeContext);

  const handleAddCartClick = (cartItem: CartItem) => {
    console.log(cartItem);
  };

  return (
    <Item product={item}>
      <FlexContainer direction="column" gap={'20px'} flex="1">
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Title fontSize="17px">{item.name}</Title>
          <div>
            <Button
              backgroundColor={colors.background}
              color={colors.white}
              onClick={() => handleAddCartClick(item)}
            >
              장바구니
            </Button>
          </div>
        </FlexContainer>

        <FlexContainer gap="2px">
          <Title fontSize="15px">{item.quantity * item.price}원</Title>

          <span> / </span>
          <Title fontSize="15px">수량: {item.quantity}</Title>
        </FlexContainer>
      </FlexContainer>
    </Item>
  );
};

export default OrderItem;
