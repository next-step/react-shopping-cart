import React, { MouseEventHandler, ReactElement } from 'react';

import { Currency, TextHighlighter, ThreeLayeredFrame } from '@/components';
import { TCartStore } from '@/stores/CartContext';

import { CartSidePanelStyle, StyledTotalPrice, StyledSubmitButton } from './CartSidePanel.styled';

interface CartSidePanelProps {
  cart: TCartStore;
  title: string;
  body: string;
  buttonContent: string | ReactElement;
  to: string;
  onSubmit: MouseEventHandler<HTMLAnchorElement>;
}

export function CartSidePanel({ cart, title, body, buttonContent, to, onSubmit }: CartSidePanelProps) {
  const cartProducts = Object.values(cart);

  return (
    <ThreeLayeredFrame
      className={CartSidePanelStyle()}
      padding="20px"
      titleSection={title}
      bodySection={
        <StyledTotalPrice>
          <TextHighlighter>{body}</TextHighlighter>
          <TextHighlighter>
            <Currency price={cartProducts.reduce((prev, curr) => prev + curr.getTotalPrice(), 0)} />
          </TextHighlighter>
        </StyledTotalPrice>
      }
      bottomSection={
        <StyledSubmitButton to={to} onClick={onSubmit}>
          {buttonContent}
        </StyledSubmitButton>
      }
    />
  );
}
