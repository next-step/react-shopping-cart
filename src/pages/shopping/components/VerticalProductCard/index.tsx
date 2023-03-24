import Card from 'components/Card';
import { useMemo } from 'react';
import { Product } from 'types/products';
import * as StyledVerticalProductCard from './VerticalProductCard.styled';

interface VerticalProductCardProps {
  product: Product;
}

const VerticalProductCard = ({ product }: VerticalProductCardProps) => {
  const { imageUrl, name, price, id } = product;

  const img = useMemo(() => ({ src: imageUrl, alt: name }), [imageUrl, name]);

  return (
    <Card
      imgInfo={img}
      imgContainerSize={{ width: '200px', height: '200px' }}
      id={id}
    >
      <StyledVerticalProductCard.FlexContainer>
        <StyledVerticalProductCard.FlexContainerColumn>
          <h5 data-id={id}>{name}</h5>
          <p data-id={id}> {price}</p>
        </StyledVerticalProductCard.FlexContainerColumn>
        <StyledVerticalProductCard.StyledCart />
      </StyledVerticalProductCard.FlexContainer>
    </Card>
  );
};

export default VerticalProductCard;
