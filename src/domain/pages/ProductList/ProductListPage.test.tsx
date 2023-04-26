import { render } from 'test/rtkProvider';
import { waitFor, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderAppPage } from 'test/renderApp';
//  rtl테스트에서 UI가 제대로 렌더링되는지 검증도 해야되는지? 현재는 store값만 제대로 되는지 검증
// store값이 제대로 갱신이되어야 UI도 렌더링이 될수있는 상황
// 둘다해야되나?

describe('ProductList 페이지 테스트', () => {
  test('렌더링되고 1초뒤에 product store에 있는 products값이 갱신되어야한다.', async () => {
    const { store } = render(renderAppPage());
    await waitFor(
      () => {
        expect(store.getState().productReducer.productList.products.length).toBe(8);
      },
      { timeout: 1500 }
    );
  });

  test('첫 렌더링시 Status는 Loading이 되어야된다', async () => {
    const { store } = render(renderAppPage());
    await waitFor(() => {
      expect(store.getState().productReducer.status).toBe('Loading');
    });
  });

  test('productList의 TotalPage가 5가 되어야한다', async () => {
    const { store } = render(renderAppPage());
    await waitFor(
      () => {
        expect(store.getState().productReducer.productList.TOTAL_PAGE).toBe(5);
      },
      { timeout: 1500 }
    );
  });
  test('cartIcon을 누르면 cartStore의 selectedCartItem이 갱신된다.', async () => {
    const { store } = render(renderAppPage());
    const cartButton = await waitFor(() => screen.findAllByTestId('cart-button'), { timeout: 1500 });

    userEvent.click(cartButton[0]);

    expect(store.getState().cartReducer.selectedCartItem.id).toBe(1);
  });

  test('cartIcon을 누르면 dialog store의 isOpen은 true가되고 메시지는 장바구니에 추가하시겠습니까? 가되어야한다.', async () => {
    const { store } = render(renderAppPage());
    const cartButton = await waitFor(() => screen.findAllByTestId('cart-button'), { timeout: 1500 });

    userEvent.click(cartButton[0]);

    expect(store.getState().dialogReducer.isOpen).toBe(true);
    expect(store.getState().dialogReducer.message).toBe('장바구니에 추가 하시겠습니까?');
  });

  test('cartIcon을 누르면 모달창이 나오고 확인 버튼을 누르면 dialogStore의 isOpen은 false가 된다.', async () => {
    const { store } = render(renderAppPage());
    const cartButton = await waitFor(() => screen.findAllByTestId('cart-button'), { timeout: 1500 });

    userEvent.click(cartButton[0]);
    const confirmButton = await screen.findByTestId('confirm-button');
    userEvent.click(confirmButton);

    expect(store.getState().dialogReducer.isOpen).toBe(false);
  });
});
