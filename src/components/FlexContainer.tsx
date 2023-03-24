import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type FlexContainerProps = {
  direction?: 'row' | 'column';
};

const FlexContainer = ({
  direction,
  children,
}: FlexContainerProps & PropsWithChildren) => {
  return <Div direction={direction}>{children}</Div>;
};

export default FlexContainer;

const Div = styled.div<FlexContainerProps>(
  ({ direction = 'row' }) => `
  display: flex;
  flex-direction: ${direction}
`
);
