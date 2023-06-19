import * as stories from './Payment.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Default, OrderPage, CartPage } = composeStories(stories);

describe('Payment 컴포넌트의 Default 테스트', () => {
  test('1000원 Text가 존재한다', () => {
    render(<Default />);
    const paymentPrice = screen.getByText('1000원');
    expect(paymentPrice).toBeInTheDocument();
  });
  test('수평바가 존재 한다.', () => {
    render(<Default />);
    const horizontalLine = screen.getByRole('banner');
    expect(horizontalLine).toBeInTheDocument();
  });
});

describe('Payment 컴포넌트의 OrderPage 스토리북 검증 테스트', () => {
  test('1000원 Text가 존재한다', async () => {
    render(<OrderPage />);
    const paymentPrice = screen.getByText('1000원');

    expect(paymentPrice).toBeInTheDocument();
  });
  test('수평바가 존재 한다.', () => {
    render(<OrderPage />);
    const horizontalLine = screen.getByRole('banner');
    expect(horizontalLine).toBeInTheDocument();
  });
  test('결제하기 버튼이 존재한다.', () => {
    render(<OrderPage />);
    const paymentButton = screen.getByRole('button');
    expect(paymentButton).toHaveTextContent('결제하기');
  });
});

describe('Payment 컴포넌트의 CartPage 스토리북 테스트', () => {
  test('1000원 Text가 존재한다', async () => {
    render(<CartPage />);
    const paymentPrice = screen.getByText('1000원');
    expect(paymentPrice).toBeInTheDocument();
  });

  test('수평바가 존재 한다.', async () => {
    render(<CartPage />);
    const horizontalLine = screen.getByRole('banner');
    expect(horizontalLine).toBeInTheDocument();
  });
  test('주문하기 버튼 텍스트는 주문하기 1개이다.', async () => {
    render(<CartPage />);
    const orderButton = screen.getByRole('button');
    expect(orderButton).toHaveTextContent('주문하기 1개');
  });
});
