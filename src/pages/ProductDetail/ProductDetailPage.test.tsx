import { render } from 'test-utils/rtkProvider';
import { waitFor, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderAppPage } from '../../test-utils/renderApp';
//  rtl테스트에서 UI가 제대로 렌더링되는지 검증도 해야되는지? 현재는 store값만 제대로 되는지 검증
// store값이 제대로 갱신이되어야 UI도 렌더링이 될수있는 상황
// 둘다해야되나?

window.alert = jest.fn();

describe('ProductDetail Page', () => {
  test('장바구니 버튼을 누르면 cartStore의 selectedCartItem이 갱신된다.', async () => {
    const { store } = render(renderAppPage());

    // product 페이지에서 진행
    const products = await waitFor(() => screen.findAllByTestId('product'), { timeout: 1500 });
    const product = products[0];

    await userEvent.click(product);

    const cartbrownButton = screen.getByTestId('cart-brown-button');
    await userEvent.click(cartbrownButton);

    expect(store.getState().cart.selectedCartItem.id).toBe(1);
  });

  test('장바구니 버튼을 누르면 dialogStore의 isOpen은 true가 되고 확인을 누르면 isOpen은 false가 되어야한다.', async () => {
    const { store } = render(renderAppPage());
    const products = await waitFor(() => screen.findAllByTestId('product'), { timeout: 1500 });
    const product = products[0];
    await userEvent.click(product);
    const cartbrownButton = screen.getByTestId('cart-brown-button');
    await userEvent.click(cartbrownButton);
    expect(store.getState().dialog.isOpen).toBe(true);
    const confirmButton = screen.getByTestId('confirm-button');
    await userEvent.click(confirmButton);
    expect(store.getState().dialog.isOpen).toBe(false);
  });
});
