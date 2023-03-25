import styled from 'styled-components';
import { FlexDirection, Img, Size } from 'types/common';
import Image from './Image';

type StyledProps = {
  direction?: FlexDirection;
  imgContainerSize: Size;
};

interface CardProps extends StyledProps {
  id: number;
  imgInfo: Img;
  children: React.ReactElement;
}

const Card = ({
  id,
  imgInfo,
  imgContainerSize,
  direction,
  children,
}: CardProps) => {
  return (
    <CardContainer direction={direction}>
      <ImageContainer imgContainerSize={imgContainerSize}>
        <Image img={imgInfo} id={id} />
      </ImageContainer>
      {children}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<Omit<StyledProps, 'imgContainerSize'>>(
  ({ direction = 'column' }) => `
    display: flex;
    flex-direction: ${direction};
    ${direction === 'column' && 'align-items: center'}
  `
);

const ImageContainer = styled.div<Omit<StyledProps, 'direction'>>(
  ({ imgContainerSize }) => `
  width: ${imgContainerSize.width};
  height: ${imgContainerSize.height};
  cursor: pointer;
`
);
