import { render } from 'test/rtkProvider';
import { waitFor, screen, act, getByRole, findByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderAppPage } from '../../../test/renderApp';
import { getCart } from 'domain/store/feature/cart/cartSlice';
window.alert = jest.fn();

describe('CartPage 테스트', () => {
  test('장바구니에 추가된 아이템은 장바구니 store에 저장되어있다.', async () => {
    const { store } = render(renderAppPage());
    const products = await waitFor(() => screen.findAllByTestId('cart-button'), { timeout: 1500 });

    // // 1. 장바구니에 product 추가

    await userEvent.click(products[0]);
    const confirmButton = screen.getByTestId('confirm-button');
    await userEvent.click(confirmButton);

    // 2. 장바구니 페이지로 이동
    const navCartButton = screen.getByTestId('nav-cart');
    await userEvent.click(navCartButton);

    await waitFor(() => expect(store.getState().cartReducer.cartList.length).toBe(1));
  });

  test('장바구니에 추가된 아이템의 체크 박스를 누르면 장바구니 store의 isOrder는 true가 된다', async () => {
    const { store } = render(renderAppPage());
    const products = await waitFor(() => screen.findAllByTestId('cart-button'), { timeout: 1500 });

    // // 1. 장바구니에 product 추가

    await userEvent.click(products[0]);
    const confirmButton = screen.getByTestId('confirm-button');
    await userEvent.click(confirmButton);

    // 2. 장바구니 페이지로 이동
    const navCartButton = screen.getByTestId('nav-cart');
    await userEvent.click(navCartButton);

    // 3. 체크박스 찾기

    const selectBox = await screen.findByTestId('checkbox');
    await userEvent.click(selectBox);
    await store.dispatch(getCart('/carts'));

    expect(store.getState().cartReducer.cartList[0].isOrder).toEqual(true);
  });
  test('모두 선택 체크 박스를 누르면 장바구니에 추가된 아이템들의 store의 isOrder는 true가 된다,', async () => {
    // 나중에 작성 todo
  });
});
