import styled from 'styled-components';
import { ReactComponent as Cart } from 'assets/cart.svg';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
`;

const StyledCart = styled(Cart)`
  width: 30px;
  height: 100%;
  margin: 0 10px;
`;

export { FlexContainer, FlexContainerColumn, StyledCart };
