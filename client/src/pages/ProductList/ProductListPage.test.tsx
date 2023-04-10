import { render } from 'test-utils/rtkProvider';
import { waitFor, screen, act } from '@testing-library/react';

import ProductListPage from './ProductListPage';
import userEvent from '@testing-library/user-event';
import { Dialog } from 'common/components';

//  rtl테스트에서 UI가 제대로 렌더링되는지 검증도 해야되는지? 현재는 store값만 제대로 되는지 검증
// store값이 제대로 갱신이되어야 UI도 렌더링이 될수있는 상황
// 둘다해야되나?

describe('ProductList 페이지 테스트', () => {
  test('ProductList 페이지가 렌더링되고 1초후에 product store에 있는 products값이 갱신되어야한다.', async () => {
    const { store } = render(<ProductListPage />);
    await waitFor(
      () => {
        expect(store.getState().product.productList.products.length).toBe(8);
      },
      { timeout: 1500 }
    );
  });

  test('ProductList 페이지가 렌더링되면 Status는 Loading이 되어야된다', async () => {
    const { store } = render(<ProductListPage />);
    await waitFor(() => {
      expect(store.getState().product.status).toBe('Loading');
    });
  });

  test('ProductList 페이지가 렌더링되고 1초후에 productList의 TotalPage가 5가 되어야한다', async () => {
    const { store } = render(<ProductListPage />);
    await waitFor(
      () => {
        expect(store.getState().product.productList.TOTAL_PAGE).toBe(5);
      },
      { timeout: 1500 }
    );
  });
  test('ProductList 페이지에서 product를 cart에 추가하면 cartStore의 selectedCart가 갱신된다.', async () => {
    const { store } = render(
      <div>
        <Dialog title="" isOpen={false} />
        <ProductListPage />
      </div>
    );
    const cartButton = await waitFor(() => screen.findAllByTestId('cart-button'), { timeout: 1500 });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(async () => {
      userEvent.click(cartButton[0]);
      const confirmButton = await screen.findByTestId('confirm-button');
      userEvent.click(confirmButton);
    });

    expect(store.getState().cart.selectedCartItem.id).toBe(1);
  });
});
