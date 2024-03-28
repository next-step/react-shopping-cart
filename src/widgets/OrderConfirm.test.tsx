import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter, renderHookWithQueryClient } from 'src/shared/mock/mockForTest';
import dbJSON from 'src/shared/mock/db.json';
import { clearMockOrderList, MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import useGetOrderDetailQuery from 'src/entities/order/hooks/useGetOrderDetailQuery';
import { formatPriceToKRW } from 'src/shared/lib/format';

describe('주문 결제 페이지 테스트', () => {
	beforeEach(() => {
		MOCK_ORDER_LIST.push(...dbJSON.orders);
		renderMemoryRouter({ initialEntries: ['/order/confirm/1'] });
	});

	afterEach(() => {
		clearMockOrderList();
	});

	it('주문 상세 api로 호출된 데이터를 화면에 나타낸다.', async () => {
		const { result } = renderHookWithQueryClient(() => useGetOrderDetailQuery({ id: '1' }));

		const totalPriceElement = await screen.findByTestId('total-price-payment');

		const numberOfProductsElement = await screen.findByTestId('number-of-products');

		const numberOfProducts = result.current.data?.orderDetails.length;

		const totalPrice = result.current.data?.orderDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);

		await waitFor(() => {
			expect(totalPriceElement.innerHTML).toBe(formatPriceToKRW(totalPrice ?? 0));
			expect(numberOfProductsElement.innerHTML).toBe(`주문 상품(${numberOfProducts}건)`);
		});
	});

	it('결제하기 버튼을 클릭하면 alert가 팝업되며 확인 버튼 클릭시 주문 정보가 갱신되며 주문목록 페이지로 이동한다.', async () => {
		const confirmPaymentButton = await screen.findByLabelText('confirm-payment');

		await userEvent.click(confirmPaymentButton);

		const alert = screen.queryByTestId('alert');

		expect(alert).not.toBeNull();

		const alertConfirmButton = await screen.findByLabelText('alert-confirm-button');

		await userEvent.click(alertConfirmButton);

		expect(MOCK_ORDER_LIST[0].isPaid).toBeTruthy();

		expect(screen.queryByTestId('order-list-page')).not.toBeNull();
	});
});
