import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type FlexContainerProps = {
  direction?: 'row' | 'column';
  flex?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  gap?: string;
};

const FlexContainer = ({
  children,
  ...props
}: FlexContainerProps & PropsWithChildren) => {
  return <Div {...props}>{children}</Div>;
};

export default FlexContainer;

const Div = styled.div<FlexContainerProps>(
  ({ direction = 'row', flex, justifyContent, alignItems, margin, gap }) => `
  display: flex;
  flex-direction: ${direction};
  ${flex && `flex: ${flex}`};
  ${justifyContent && `justify-content: ${justifyContent}`};
  ${alignItems && `align-items: ${alignItems}`};
  ${margin && `margin: ${margin}`};
  ${gap && `gap: ${gap}`};
`
);
