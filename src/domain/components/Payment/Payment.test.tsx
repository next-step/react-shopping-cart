import * as stories from './Payment.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Default, OrderPage, CartPage } = composeStories(stories);

describe('Payment 컴포넌트의 Default 스토리북 렌더링 검증 테스트', () => {
  test('결제 예상 금액이 존재해야한다.', async () => {
    render(<Default />);
    const paymentText = await screen.findByText('결제 예상 금액');
    expect(paymentText).toBeInTheDocument();
  });
  test('가격은 1000원이어야한다', async () => {
    render(<Default />);
    const price = await screen.findByText('1000원');
    expect(price).toBeInTheDocument();
  });
  test('수평바가 존재해야한다.', async () => {
    render(<Default />);
    const horizontalLine = await screen.findByTestId('horizontalLine');
    expect(horizontalLine).toBeInTheDocument();
  });
});
describe('Payment 컴포넌트의 OrderPage 스토리북 렌더링 검증 테스트', () => {
  test('결제 예상 금액이 존재해야한다.', async () => {
    render(<OrderPage />);
    const paymentText = await screen.findByText('결제 예상 금액');
    expect(paymentText).toBeInTheDocument();
  });
  test('가격은 1000원이어야한다', async () => {
    render(<OrderPage />);
    const price = await screen.findByText('1000원');
    expect(price).toBeInTheDocument();
  });
  test('수평바가 존재해야한다.', async () => {
    render(<OrderPage />);
    const horizontalLine = await screen.findByTestId('horizontalLine');
    expect(horizontalLine).toBeInTheDocument();
  });
  test('결제하기 버튼이 존재해야한다.', async () => {
    render(<OrderPage />);
    const paymentButton = await screen.findByRole('button');
    expect(paymentButton.innerHTML).toBe('결제하기');
  });
});
describe('Payment 컴포넌트의 CartPage 스토리북 렌더링 검증 테스트', () => {
  test('결제 예상 금액이 존재해야한다.', async () => {
    render(<CartPage />);
    const paymentText = await screen.findByText('결제 예상 금액');
    expect(paymentText).toBeInTheDocument();
  });
  test('가격은 1000원이어야한다', async () => {
    render(<CartPage />);
    const price = await screen.findByText('1000원');
    expect(price).toBeInTheDocument();
  });
  test('수평바가 존재해야한다.', async () => {
    render(<CartPage />);
    const horizontalLine = await screen.findByTestId('horizontalLine');
    expect(horizontalLine).toBeInTheDocument();
  });
  test('주문하기 버튼이 존재해야한다.', async () => {
    render(<CartPage />);
    const orderButton = await screen.findByRole('button');
    expect(orderButton.innerHTML).toBe('주문하기 1개');
  });
});
