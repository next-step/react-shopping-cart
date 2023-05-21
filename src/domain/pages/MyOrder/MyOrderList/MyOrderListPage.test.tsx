import * as stories from './MyOrderList.stories';
import { screen, waitFor, act } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test/rtkProvider';
import { setupServer } from 'msw/node';
import { handlers } from '../mockserver';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const { Default } = composeStories(stories);

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MyOrderListPage 렌더링 테스트', () => {
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
  test('상세보기가 존재해야한다.', async () => {
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

describe('MyOrderListPage 기능 테스트', () => {
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
  test('상세보기를 누르면 useNavigate는 /1이 호출 되어야한다.', async () => {
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

    expect(mockedUsedNavigate).toHaveBeenCalledWith({ pathname: '1' });
  });
});
