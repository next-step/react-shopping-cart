import { expect, describe, it } from 'vitest';
import { renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MOCK_CART_LIST, { clearMockCartList } from 'src/entities/cart/mock/MOCK_CART_LIST';
import { renderMemoryRouter, renderHookWithQueryClient } from 'src/shared/mock/mockForTest';
import dbJSON from 'src/shared/mock/db.json';
import { formatPriceToKRW } from 'src/shared/lib/format';
import useCartStore from 'src/entities/cart/store/useCartStore';
import useGetOrderListQuery from 'src/entities/order/hooks/useGetOrderListQuery';
import { clearMockOrderList } from 'src/entities/order/mock/MOCK_ORDER_LIST';

describe('장바구니 페이지 테스트', () => {
	it('장바구니에 상품이 없으면 "장바구니에 담긴 상품이 없습니다." 메시지가 표시된다.', async () => {
		renderMemoryRouter({ initialEntries: ['/cart'] });
		const cartItemList = screen.queryAllByTestId('cart-item');

		expect(cartItemList).toHaveLength(0);

		await waitFor(() => {
			expect(screen.queryByText('장바구니에 담긴 상품이 없습니다.')).not.toBeNull();
		});
	});

	it('장바구니에 상품이 있으면 상품이 표시된다.', async t => {
		MOCK_CART_LIST.push(...dbJSON.carts);

		renderMemoryRouter({ initialEntries: ['/cart'] });

		const cartItemList = await screen.findAllByTestId('cart-item');

		expect(cartItemList).toHaveLength(MOCK_CART_LIST.length);

		t.onTestFinished(() => {
			clearMockCartList();
		});
	});

	describe('전체선택 버튼을 클릭하면', () => {
		it('모든 상품이 선택된다.', async () => {
			MOCK_CART_LIST.push(...dbJSON.carts);

			renderMemoryRouter({ initialEntries: ['/cart'] });

			const selectAllButton = await screen.findByLabelText('select-all');

			await userEvent.click(selectAllButton);

			const cartItemCheckboxes = await screen.findAllByLabelText<HTMLInputElement>('select-item');

			cartItemCheckboxes.forEach(checkbox => {
				expect(checkbox.checked).toBeTruthy();
			});
		});

		it('선택된 상품들의 총 가격이 우측에 표시된다.', async () => {
			renderMemoryRouter({ initialEntries: ['/cart'] });

			const selectAllButton = await screen.findByLabelText('select-all');

			await userEvent.click(selectAllButton);

			const { result } = renderHook(() =>
				useCartStore(state =>
					Object.values(state.cart).reduce(
						(acc, item) => acc + (item.selected ? item.product.price * item.quantity : 0),
						0,
					),
				),
			);

			await waitFor(() => {
				expect(screen.getByText(formatPriceToKRW(result.current))).not.toBeNull();
			});
		});

		it('상품삭제 버튼을 클릭하면 alert가 팝업되며 확인 버튼을 클릭하면 모든 상품이 삭제된다.', async () => {
			renderMemoryRouter({ initialEntries: ['/cart'] });

			const selectAllButton = await screen.findByLabelText('select-all');

			await userEvent.click(selectAllButton);

			const deleteButton = await screen.findByLabelText('delete-cart-item');

			await userEvent.click(deleteButton);

			const alert = screen.queryByTestId('alert');

			expect(alert).not.toBeNull();

			const alertConfirmButton = await screen.findByLabelText('alert-confirm-button');

			await userEvent.click(alertConfirmButton);

			const cartItemList = screen.queryAllByTestId('cart-item');

			expect(cartItemList).toHaveLength(0);
		});
	});

	it('선택된 제품의 수량을 변경하면 총 가격이 변경된다.', async t => {
		MOCK_CART_LIST.push(...dbJSON.carts);

		renderMemoryRouter({ initialEntries: ['/cart'] });

		const { result } = renderHook(() =>
			useCartStore(state =>
				Object.values(state.cart).reduce(
					(acc, item) => acc + (item.selected ? item.product.price * item.quantity : 0),
					0,
				),
			),
		);

		const cartItemSelectInput = await screen.findByTestId(`select-item-${MOCK_CART_LIST[0].id}`);

		await userEvent.click(cartItemSelectInput);

		const totalPriceElement = await screen.findByLabelText('total-price');

		expect(totalPriceElement.innerHTML).toBe(formatPriceToKRW(result.current));

		const increaseButton = await screen.findByLabelText(`increase-quantity-${MOCK_CART_LIST[0].id}`);

		await userEvent.click(increaseButton);

		const totalPriceElementAfterIncrease = await screen.findByLabelText('total-price');

		expect(totalPriceElementAfterIncrease.innerHTML).toBe(formatPriceToKRW(result.current));

		t.onTestFinished(() => {
			clearMockCartList();
		});
	});

	it('제품 선택 후 주문하기 버튼을 클릭하면 alert가 팝업된다. 확인 버튼을 클릭하면 주문이 추가되고 주문 확인 페이지로 이동한다.', async t => {
		MOCK_CART_LIST.push(...dbJSON.carts);

		renderMemoryRouter({ initialEntries: ['/cart'] });

		const selectAllButton = await screen.findByLabelText('select-all');

		await userEvent.click(selectAllButton);

		const orderButton = await screen.findByLabelText('make-order');

		await userEvent.click(orderButton);

		const alert = screen.queryByTestId('alert');

		expect(alert).not.toBeNull();

		const alertConfirmButton = await screen.findByLabelText('alert-confirm-button');

		await userEvent.click(alertConfirmButton);

		const { result: orderListResult } = renderHookWithQueryClient(() => useGetOrderListQuery());

		await waitFor(() => {
			expect(orderListResult.current.data).toHaveLength(1);
		});

		const orderConfirmPage = screen.queryByTestId('order-confirm-page');

		await waitFor(() => {
			expect(orderConfirmPage).not.toBeNull();
		});

		t.onTestFinished(() => {
			clearMockCartList();
			clearMockOrderList();
		});
	});
});
