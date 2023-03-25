import Card from 'components/Card';
import FlexContainer from 'components/FlexContainer';
import Title from 'components/Title';
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
      imgContainerSize={{ width: '100%', height: '100%' }}
      id={id}
    >
      <StyledVerticalProductCard.StyledFlexContainer justifyContent="space-between">
        <FlexContainer direction="column">
          <Title data-id={id}>{name}</Title>
          <p data-id={id}>{price}원</p>
        </FlexContainer>
        <StyledVerticalProductCard.StyledCart />
      </StyledVerticalProductCard.StyledFlexContainer>
    </Card>
  );
};

export default VerticalProductCard;
