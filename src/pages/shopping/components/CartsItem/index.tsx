import Checkbox from 'components/Checkbox';
import Image from 'components/Image';
import FlexContainer from 'components/FlexContainer';
import React, { useMemo, useState } from 'react';
import * as StyledCartsItem from './CartsItem.styled';
import Title from 'components/Title';
import { Cart, CartItem } from 'types/cart';
import Button from 'components/Button';
import { CARTS, DECREASE, INCREASE } from 'constants/carts';
import useAxios from 'hooks/useAxios';

interface CartsItemProps {
  cartId: number;
  product: CartItem;
  selected: boolean;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CartsItem = ({
  cartId,
  product,
  selected,
  handleCheckboxChange,
}: CartsItemProps) => {
  const { id, name, imageUrl } = product;
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [price, setPrice] = useState<number>(product.price);
  const { fetchData: addCart } = useAxios<Cart>({
    url: `/${CARTS}`,
    method: 'post',
    immediate: false,
  });

  const imgInfo = useMemo(
    () => ({ src: imageUrl, alt: name }),
    [imageUrl, name]
  );

  const handleQuantityClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { id } = e.currentTarget.dataset;

    const response = await addCart({
      id: cartId,
      product: {
        ...product,
        quantity: id === INCREASE ? quantity + 1 : quantity - 1,
      },
    });
    if (response) {
      setQuantity(response.data.product.quantity);
      setPrice(response.data.product.price);
    }
  };

  return (
    <FlexContainer margin="10px 0" gap={'10px'}>
      <Checkbox
        name={name}
        id={product.id.toString()}
        checked={selected}
        onChange={handleCheckboxChange}
      />

      <StyledCartsItem.ImageContainer>
        <Image img={imgInfo} id={id} />
      </StyledCartsItem.ImageContainer>

      <Title fontSize="17px">{name}</Title>

      <FlexContainer
        direction="column"
        justifyContent="space-between"
        margin={'0 5px 0 auto'}
      >
        <StyledCartsItem.StyledTrash />
        <StyledCartsItem.GridContainer>
          <StyledCartsItem.GridItem>{quantity}</StyledCartsItem.GridItem>
          <Button data-id={INCREASE} onClick={handleQuantityClick}>
            ↑
          </Button>
          <Button data-id={DECREASE} onClick={handleQuantityClick}>
            ↓
          </Button>
        </StyledCartsItem.GridContainer>
        <p>{price}원</p>
      </FlexContainer>
    </FlexContainer>
  );
};

export default CartsItem;
