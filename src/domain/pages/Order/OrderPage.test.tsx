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
  test('페이지 헤더는 주문/결제 이다.', async () => {
    render(<Default />);
    const pageHeaderText = await screen.findByRole('heading', { name: '주문/결제' });
    expect(pageHeaderText).toBeInTheDocument();
  });
  test('주문 상품은 (4건)이 존재 한다.', async () => {
    render(<Default />);
    const orderCount = await screen.findByTestId('order-totalAmount');
    expect(orderCount).toHaveTextContent('주문 상품(4건)');
  });
  test('상품의 이미지,이름,수량 가격이 4개가 존재 한다.', async () => {
    render(<Default />);

    const productNames = await screen.findAllByTestId('order-name');
    const productamounts = await screen.findAllByTestId('order-amount');
    const productprices = await screen.findAllByTestId('order-price');
    const productImgs = await screen.findAllByRole('img');

    expect(productImgs).toHaveLength(4);
    expect(productNames).toHaveLength(4);
    expect(productamounts).toHaveLength(4);
    expect(productprices).toHaveLength(4);
  });

  test('결제 금액은 201180원 이다.', async () => {
    render(<Default />);
    const paymentPrice = await screen.findByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('201180원');
  });

  test('결제 하기 버튼이 존재 한다.', async () => {
    render(<Default />);
    const paymentButton = await screen.findByRole('button', { name: '결제하기' });
    expect(paymentButton).toBeInTheDocument();
  });
});

describe('OrderPage 결제하기 버튼 테스트', () => {
  test('결제하기 버튼을 클릭하면 결제하시겠습니까 라는 dialog가 나타난다.', async () => {
    render(<Default />);
    const paymentButton = await screen.findByRole('button', { name: '결제하기' });

    await userEvent.click(paymentButton);

    const dialog = await screen.findByRole('dialog');
    expect(dialog).toHaveTextContent('결제 하시겠습니까?');
  });
});
