import * as stories from './OrderPage.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test/rtkProvider';
import { setupServer } from 'msw/node';

import { handlers } from './mockserver';

const { Default } = composeStories(stories);

const server = setupServer(...handlers);
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('OrderPage 렌더링 테스트', () => {
  test('페이지 헤더는 주문/결제 이어야 한다.', async () => {
    render(<Default />);
    const pageHeaderText = await screen.findByTestId('page-header-text');
    expect(pageHeaderText).toHaveTextContent('주문/결제');
  });
  test('주문 상품은 (4건)이 존재해야한다.', async () => {
    render(<Default />);
    const orderCount = await screen.findByText('주문 상품(4건)');
    expect(orderCount).toBeInTheDocument();
  });
  test('상품의 이미지,이름,수량 가격이 4개가 존재해야한다.', async () => {
    render(<Default />);
    const productImgs = await screen.findAllByTestId('orderItem-image');
    const productNames = await screen.findAllByTestId('orderItem-name');
    const productamounts = await screen.findAllByTestId('orderItem-amount');
    const productprices = await screen.findAllByTestId('orderItem-price');

    expect(productImgs).toHaveLength(4);
    expect(productNames).toHaveLength(4);
    expect(productamounts).toHaveLength(4);
    expect(productprices).toHaveLength(4);
  });

  test('결제 금액은 201180원 이어야 한다.', async () => {
    render(<Default />);
    const paymentPrice = await screen.findByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('201180원');
  });

  test('결제 하기 버튼이 존재해야한다.', async () => {
    render(<Default />);
    const paymentButton = await screen.findByTestId('payment-button');
    expect(paymentButton).toHaveTextContent('결제하기');
  });
});

describe('OrderPage 결제하기 버튼 테스트', () => {
  test('결제하기 버튼을 클릭하면 결제하시겠습니까 라는 dialog가 나타야한다.', async () => {
    render(<Default />);
    const paymentButton = await screen.findByTestId('payment-button');

    await userEvent.click(paymentButton);

    const dialogTitle = await screen.findByTestId('dialog-title');
    expect(dialogTitle).toHaveTextContent('결제 하시겠습니까?');
  });
});
