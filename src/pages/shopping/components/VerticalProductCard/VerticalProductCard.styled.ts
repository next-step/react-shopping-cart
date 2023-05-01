import styled from 'styled-components';
import { ReactComponent as Cart } from 'assets/cart.svg';
import FlexContainer from 'components/FlexContainer';

const StyledFlexContainer = styled(FlexContainer)`
  padding: 10px;
  width: 100%;
`;

const StyledCart = styled(Cart)`
  width: 30px;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;

export { StyledFlexContainer, StyledCart };
