import FlexContainer from 'components/FlexContainer';
import Image from 'components/Image';
import { PropsWithChildren, useMemo } from 'react';
import { CartItem } from 'types/cart';
import * as StyledItem from './Item.styled';

interface ItemProps extends PropsWithChildren {
  product: CartItem;
}

const Item = ({ product, children }: ItemProps) => {
  const { id, name, imageUrl } = product;

  const imgInfo = useMemo(
    () => ({ src: imageUrl, alt: name }),
    [imageUrl, name]
  );

  return (
    <FlexContainer margin="10px 0" gap={'10px'}>
      <StyledItem.ImageContainer>
        <Image img={imgInfo} id={id} />
      </StyledItem.ImageContainer>
      {children}
    </FlexContainer>
  );
};

export default Item;
