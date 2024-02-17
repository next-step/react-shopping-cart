import React, { MouseEventHandler, ReactElement } from 'react';

import { Currency, TextHighlighter, ThreeLayeredFrame } from '@/components';
import { TCartStore } from '@/stores/CartContext';

import { CartSidePanelStyle, StyledTotalPrice, StyledSubmitButton } from './CartSidePanel.styled';

interface CartSidePanelProps {
  cart: TCartStore;
  title: string;
  body: string;
  className?: string;
  buttonContent?: string | ReactElement;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

export function CartSidePanel({ cart, title, body, className, buttonContent, onButtonClick }: CartSidePanelProps) {
  const cartProducts = Object.values(cart);

  return (
    <ThreeLayeredFrame
      className={`${CartSidePanelStyle()} ${className}`}
      padding="20px"
      dividerCss={{ backgroundColor: 'rgba(0,0,0,.1)' }}
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
        buttonContent && (
          <StyledSubmitButton type="button" onClick={onButtonClick} disable={cartProducts.length <= 0}>
            {buttonContent}
          </StyledSubmitButton>
        )
      }
    />
  );
}
