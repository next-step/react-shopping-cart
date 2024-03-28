import { expect, describe, it, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter } from 'src/shared/mock/mockForTest';

describe('GNB 테스트', () => {
	beforeEach(() => {
		renderMemoryRouter();
	});

	it('장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.', async () => {
		const cartButton = screen.getByTestId('gnb-cart');

		await userEvent.click(cartButton);

		await waitFor(() => {
			expect(screen.queryByTestId('cart-page')).not.toBeNull();
		});
	});

	it('주문 목록 버튼을 클릭하면 주문 목록 페이지로 이동한다.', async () => {
		const orderListButton = screen.getByTestId('gnb-order-list');

		await userEvent.click(orderListButton);

		await waitFor(() => {
			expect(screen.queryByTestId('order-list-page')).not.toBeNull();
		});
	});
});
