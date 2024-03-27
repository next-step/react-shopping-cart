import { expect, describe, it, afterEach, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter, renderHookWithQueryClient } from 'src/shared/mock/mockForTest';
import dbJSON from 'src/shared/mock/db.json';
import { clearMockOrderList, MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import useGetOrderDetailQuery from 'src/entities/order/hooks/useGetOrderDetailQuery';
import { formatPriceToKRW } from 'src/shared/lib/format';
import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

describe('주문 목록 페이지 테스트', () => {
	beforeEach(() => {
		MOCK_ORDER_LIST.push(...dbJSON.orders);
		renderMemoryRouter({ initialEntries: [`/order/detail/${dbJSON.orders[0].id}`] });
	});

	afterEach(() => {
		clearMockOrderList();
	});

	it('주문 상세 api로 호출된 데이터를 화면에 나타낸다.', async () => {
		const { result } = renderHookWithQueryClient(() => useGetOrderDetailQuery({ id: dbJSON.orders[0].id }));

		const totalPriceElement = await screen.findByTestId('total-price');

		const numberOfProductsElement = await screen.findAllByTestId('order-detail-item');

		const numberOfProducts = result.current.data?.orderDetails.length;

		const totalPrice = result.current.data?.orderDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);

		expect(totalPriceElement.innerHTML).toBe(formatPriceToKRW(totalPrice ?? 0));
		expect(numberOfProductsElement.length).toBe(numberOfProducts);
	});

	it('주문 내 상품의 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 추가되고 Alert가 팝업된다.', async () => {
		const cartButton = await screen.findByLabelText(`cart-button-${dbJSON.orders[0].orderDetails[0].id}`);

		await userEvent.click(cartButton);

		const { result } = renderHookWithQueryClient(() => useGetCartItemListQuery());

		const alert = screen.queryByTestId('alert');

		expect(alert).not.toBeNull();

		await waitFor(() => {
			expect(result.current.data).toHaveLength(1);
			expect(result.current.data?.at(0)?.product.id).toBe(dbJSON.orders[0].orderDetails[0].id);
		});
	});
});
