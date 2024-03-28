import { expect, describe, it, afterEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter, renderHookWithQueryClient } from 'src/shared/mock/mockForTest';
import dbJSON from 'src/shared/mock/db.json';
import { clearMockOrderList, MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import useGetOrderListQuery from 'src/entities/order/hooks/useGetOrderListQuery';
import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

describe('주문 목록 페이지 테스트', () => {
	afterEach(() => {
		clearMockOrderList();
	});

	it('주문 목록 api로 호출된 데이터를 화면에 나타낸다.', async () => {
		MOCK_ORDER_LIST.push(...dbJSON.orders);
		renderMemoryRouter({ initialEntries: ['/order/list'] });
		const { result } = renderHookWithQueryClient(() => useGetOrderListQuery());

		const orderList = await screen.findAllByTestId('order-list-item');

		expect(orderList).toHaveLength(result.current.data.length);
	});

	it('주문 목록이 없으면 "주문이 없습니다." 메시지가 표시된다.', async () => {
		clearMockOrderList();

		renderMemoryRouter({ initialEntries: ['/order/list'] });

		await waitFor(() => {
			expect(screen.queryByText('주문이 없습니다.')).not.toBeNull();
		});
	});

	it('주문목록 내 상품의 장바구니를 클릭하면 해당 상품이 장바구니에 추가되고 Alert가 팝업된다.', async () => {
		MOCK_ORDER_LIST.push(...dbJSON.orders);

		renderMemoryRouter({ initialEntries: ['/order/list'] });

		const cartButton = await screen.findByLabelText(`cart-button-${dbJSON.orders[0].orderDetails[0].id}`);

		await userEvent.click(cartButton);

		const { result } = renderHookWithQueryClient(() => useGetCartItemListQuery());

		const alert = screen.queryByTestId('alert');

		expect(alert).not.toBeNull();

		await waitFor(() => {
			expect(result.current.data).toHaveLength(1);
			expect(result.current.data[0].product.id).toBe(dbJSON.orders[0].orderDetails[0].id);
		});
	});

	it('상세보기 버튼을 클릭하면 해당 주문의 상세 페이지로 이동한다.', async () => {
		MOCK_ORDER_LIST.push(...dbJSON.orders);

		renderMemoryRouter({ initialEntries: ['/order/list'] });

		const detailButton = await screen.findByLabelText(`detail-button-${dbJSON.orders[0].id}`);

		await userEvent.click(detailButton);

		expect(screen.queryByTestId('order-detail-page')).not.toBeNull();
	});
});
