import * as stories from './MyOrderPage.stories';
import { screen, waitFor, act } from '@testing-library/react';

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

describe('MyOrderPage 테스트', () => {
  test('2개의 상품의정보(이미지,이름,가격,수량)가 존재해야한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const productsimg = screen.getAllByRole('img');
        expect(productsimg).toHaveLength(2);
      },
      { timeout: 3000 }
    );
    const productsName = screen.getAllByTestId('order-name');
    const productsInfo = screen.getAllByTestId('order-info');

    expect(productsName).toHaveLength(2);
    expect(productsInfo).toHaveLength(2);
  });

  test('페이지 헤더 이름은 주문 목록 이어야 한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const pageHeader = screen.getByTestId('page-header-text');
        expect(pageHeader).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
    const pageHeader = screen.getByTestId('page-header-text');
    expect(pageHeader.innerHTML).toBe('주문 목록');
  });
  test('2개의 cartButton이 존재해야한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const cartButton = screen.getAllByTestId('order-cartbutton');
        expect(cartButton).toHaveLength(2);
      },
      { timeout: 3000 }
    );
  });
  test('주문번호는 1이어야한다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const orderNumber = screen.getByTestId('order-number');
        expect(orderNumber).toHaveTextContent('주문번호 : 1');
      },
      { timeout: 3000 }
    );
  });
  test('상세보기버튼이 존재해야한다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const orderDetailButton = screen.getByTestId('orderDetail-button');
        expect(orderDetailButton).toHaveTextContent('상세보기');
      },
      { timeout: 3000 }
    );
  });
});

describe('MyOrderPage 기능 테스트', () => {
  test('장바구니 버튼을 누르면 장바구니 추가하시겠습니까? 모달창이 나와야한다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const cartButtons = screen.getAllByTestId('order-cartbutton');
        expect(cartButtons).toHaveLength(2);
      },
      { timeout: 3000 }
    );
    const cartButton = screen.getAllByTestId('order-cartbutton')[0];

    await userEvent.click(cartButton);

    const dialog = await screen.findByTestId('dialog');
    const dialogTitle = screen.getByTestId('dialog-title');

    expect(dialog).toBeInTheDocument();
    expect(dialogTitle).toHaveTextContent('장바구니에 추가 하시겠습니까?');
  });
  test('상세보기를 누르면 주문내역과 동일한 2개의 상품의정보(이미지,이름,가격,수량)가 존재해야한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const orderDetailButton = screen.getByTestId('orderDetail-button');
        expect(orderDetailButton).toHaveTextContent('상세보기');
      },
      { timeout: 3000 }
    );

    const detailButton = screen.getByTestId('orderDetail-button');

    const orderPageImage = screen.getAllByRole('img');
    const orderPageName = screen.getAllByTestId('order-name');
    const orderPageInfo = screen.getAllByTestId('order-info');

    await userEvent.click(detailButton);
    await waitFor(
      () => {
        const productsimg = screen.getAllByRole('img');
        expect(productsimg).toHaveLength(2);
      },
      { timeout: 3000 }
    );

    const orderDetailPageImage = screen.getAllByRole('img');
    const orderDetailPageName = screen.getAllByTestId('order-name');
    const orderDetailPageInfo = screen.getAllByTestId('order-info');

    expect(orderPageImage).toEqual(orderDetailPageImage);
    expect(orderPageName).toEqual(orderDetailPageName);
    expect(orderPageInfo).toEqual(orderDetailPageInfo);
  });

  test('상세보기를 누르면 페이지 헤더 이름은 주문내역 상세 여야 한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const orderDetailButton = screen.getByTestId('orderDetail-button');
        expect(orderDetailButton).toHaveTextContent('상세보기');
      },
      { timeout: 3000 }
    );

    const detailButton = screen.getByTestId('orderDetail-button');
    await userEvent.click(detailButton);
    await waitFor(
      () => {
        const pageHeader = screen.getByTestId('page-header-text');
        expect(pageHeader).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
    const pageHeader = screen.getByTestId('page-header-text');
    expect(pageHeader.innerHTML).toBe('주문내역 상세');
  });

  test('상세보기를 누르면 결제 금액정보는 112700원이어야한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const orderDetailButton = screen.getByTestId('orderDetail-button');
        expect(orderDetailButton).toHaveTextContent('상세보기');
      },
      { timeout: 3000 }
    );

    const detailButton = screen.getByTestId('orderDetail-button');
    await userEvent.click(detailButton);
    await waitFor(
      () => {
        const paymentPrice = screen.getByTestId('payment-price');
        expect(paymentPrice).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
    const paymentPrice = await screen.findByTestId('payment-price');
    expect(paymentPrice.innerHTML).toBe('112700원');
  });
});
