import styled from 'styled-components';
import { FlexDirection, Img, Size } from 'types/common';
import Image from './Image';

type StyledProps = {
  direction?: FlexDirection;
};

interface CardProps extends StyledProps {
  imgInfo: Img & Size;
  children: React.ReactElement;
}

const Card = ({ imgInfo, direction, children }: CardProps) => {
  return (
    <CardContainer direction={direction}>
      <Image img={imgInfo} size={imgInfo} />
      {children}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<StyledProps>(
  ({ direction = 'column' }) => `
    display: flex;
    flex-direction: ${direction};
    ${direction === 'column' && 'align-items: center'}
  `
);
