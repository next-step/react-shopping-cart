import { expect, describe, it } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter, renderHookWithQueryClient } from 'src/shared/mock/mockForTest';
import dbJson from 'src/shared/mock/db.json';
import { server } from 'src/shared/mock/mswSetup';
import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';
import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

describe('상품 목록 페이지 테스트', () => {
	it('상품이 없으면 "상품이 존재하지 않습니다." 메시지가 표시된다.', async () => {
		server.use(getProductListMockHandler([]));

		renderMemoryRouter();

		await waitFor(() => {
			const productListItems = screen.queryAllByTestId('product-list-item');

			expect(productListItems).toHaveLength(0);
			expect(screen.queryByText('상품이 존재하지 않습니다.')).not.toBeNull();
		});
	});

	it('상품을 클릭하면 해당 상품의 상세 페이지로 이동한다.', async () => {
		renderMemoryRouter();

		const productListItems = await screen.findAllByTestId('product-list-item');

		await userEvent.click(productListItems[0]);

		const productDetailButton = screen.queryByTestId('product-detail-button');

		expect(productDetailButton).not.toBeNull();
	});

	it('장바구니 버튼을 클릭하면 alert가 팝업되며 장바구니에 상품이 추가된다.', async () => {
		renderMemoryRouter();

		const productCartButton = await screen.findByTestId(`product-cart-button-${dbJson.products[0].id}`);

		await userEvent.click(productCartButton);

		const alert = screen.queryByTestId('alert');

		expect(alert).not.toBeNull();

		const { result } = renderHookWithQueryClient(() => useGetCartItemListQuery());

		await waitFor(() => {
			expect(result.current.data).toHaveLength(1);
		});
	});
});
