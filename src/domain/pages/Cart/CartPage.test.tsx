import * as stories from './CartPage.stories';
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

describe('장바구니 체크박스 테스트', () => {
  test('장바구니에서 첫번쨰 아이템을 선택하면 주문하기 1개,결제 예상 금액은 83700원이 되어야한다.', async () => {
    render(<Default />);

    const itemCheckBoxs = await screen.findAllByTestId('item-checkbox');
    const firstItem = itemCheckBoxs[0];

    await userEvent.click(firstItem);

    await waitFor(() => {
      const orderButton = screen.getByTestId('order-button');
      expect(orderButton).toHaveTextContent('주문하기 1개');
    });
  });

  test('장바구니에서 두번쨰 아이템을 선택하면 주문하기 2개,결제 예상 금액은 112700원이 되어야한다.', async () => {
    render(<Default />);

    const itemCheckBoxs = await screen.findAllByTestId('item-checkbox');
    const secondItem = itemCheckBoxs[1];

    await userEvent.click(secondItem);

    await waitFor(() => {
      const paymentprice = screen.getByTestId('payment-price');
      expect(paymentprice).toHaveTextContent('112700원');
    });
    const orderButton = screen.getByTestId('order-button');
    expect(orderButton).toHaveTextContent('주문하기 2개');
  });

  test('장바구니에서 두번째 아이템을 해제하면 주문하기 1개,결제 예상 금액은 83700원이 되어야한다.', async () => {
    render(<Default />);

    const itemCheckBoxs = await screen.findAllByTestId('item-checkbox');
    const secondItem = itemCheckBoxs[1];

    await userEvent.click(secondItem);

    await waitFor(() => {
      const paymentprice = screen.getByTestId('payment-price');
      expect(paymentprice).toHaveTextContent('83700원');
    });
    const orderButton = screen.getByTestId('order-button');
    expect(orderButton).toHaveTextContent('주문하기 1개');
  });
});

describe('모두 선택 체크 박스 테스트', () => {
  test('모두선택 체크 박스를 누르면 주문하기 2개, 112700원이 되어야한다.', async () => {
    render(<Default />);

    const allcheckbox = await screen.findByTestId('all-checkbox');
    await userEvent.click(allcheckbox);

    await waitFor(() => {
      const paymentprice = screen.getByTestId('payment-price');
      expect(paymentprice).toHaveTextContent('112700원');
    });
    const orderButton = screen.getByTestId('order-button');
    expect(orderButton).toHaveTextContent('주문하기 2개');
  });

  test('모두선택 체크 박스를 다시누르면 주문하기 0개, 결제예상금액은 0원이 되어야한다.', async () => {
    render(<Default />);

    const allcheckbox = await screen.findByTestId('all-checkbox');
    await userEvent.click(allcheckbox);

    const orderButton = screen.getByTestId('order-button');
    expect(orderButton).toHaveTextContent('주문하기 0개');
  });
});

describe('주문하기 버튼 테스트', () => {
  test('체크된 아이템이 존재하지 않으면 주문하기 버튼은 비활성화 되어야한다.', async () => {
    render(<Default />);
    const orderButton = screen.getByTestId('order-button');
    expect(orderButton).toBeDisabled();
  });

  test('체크된 아이템이 존재하면 주문하기 버튼은 활성화 되어야한다.', async () => {
    render(<Default />);

    const itemCheckBoxs = await screen.findAllByTestId('item-checkbox');
    const firstItem = itemCheckBoxs[0];

    await userEvent.click(firstItem);

    const orderButton = screen.getByTestId('order-button');
    expect(orderButton).toBeEnabled();
  });

  test('주문하기 버튼을 누르면 주문 하시겠습니까?를 가진 dialog가 나타나야한다.', async () => {
    render(<Default />);

    const itemCheckBoxs = await screen.findAllByTestId('item-checkbox');
    const firstItem = itemCheckBoxs[0];
    await userEvent.click(firstItem);

    const orderButton = screen.getByTestId('order-button');
    await userEvent.click(orderButton);

    await waitFor(() => {
      const dialogTitle = screen.getByTestId('dialog-title');
      expect(dialogTitle).toHaveTextContent('주문 하시겠습니까?');
    });
  });
});
describe('장바구니 삭제 테스트', () => {
  test('체크된 모든 아이템 들을 삭제 버튼 누르고 모달창의 확인버튼을 누르면, 주문하기 버튼은 주문하기 0개이 되어야한다.', async () => {
    render(<Default />);

    const allcheckbox = await screen.findByTestId('all-checkbox');

    // 1. 모두 선택 체크박스 클릭
    await userEvent.click(allcheckbox);

    const cartRemoveButton = await screen.findByTestId('cart-removeButton');
    await userEvent.click(cartRemoveButton);

    await waitFor(() => {
      const dialogTitle = screen.getByTestId('dialog-title');
      expect(dialogTitle).toHaveTextContent('상품을 삭제하시겠습니까?');
    });
    const confirmButton = await screen.findByTestId('confirm-button');
    await userEvent.click(confirmButton);

    const orderButton = await screen.findByTestId('order-button');
    expect(orderButton).toHaveTextContent('주문하기 0개');
  });
});
