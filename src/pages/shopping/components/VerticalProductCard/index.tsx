import Card from 'components/Card';
import { useMemo } from 'react';
import { Product } from 'types/products';
import * as StyledVerticalProductCard from './VerticalProductCard.styled';

interface VerticalProductCardProps {
  product: Product;
}

const VerticalProductCard = ({ product }: VerticalProductCardProps) => {
  const { imageUrl, name, price } = product;

  const img = useMemo(
    () => ({ src: imageUrl, alt: name, width: '200px', height: '200px' }),
    [imageUrl, name]
  );

  return (
    <Card imgInfo={img}>
      <StyledVerticalProductCard.FlexContainer>
        <StyledVerticalProductCard.FlexContainerColumn>
          <h5>{name}</h5>
          <p>{price}</p>
        </StyledVerticalProductCard.FlexContainerColumn>
        <StyledVerticalProductCard.StyledCart />
      </StyledVerticalProductCard.FlexContainer>
    </Card>
  );
};

export default VerticalProductCard;
