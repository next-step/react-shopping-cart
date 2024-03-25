import { expect, describe, it } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter } from 'src/shared/mock/mockForTest';
import dbJson from 'src/shared/mock/db.json';
import { server } from 'src/shared/mock/mswSetup';
import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';

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

	it('올바른 상품 개수가 표시된다.', async () => {
		renderMemoryRouter();

		const productListItems = await screen.findAllByTestId('product-list-item');

		expect(productListItems).toHaveLength(dbJson.products.length);
	});

	it('상품을 클릭하면 해당 상품의 상세 페이지로 이동한다.', async () => {
		renderMemoryRouter();

		const productListItems = await screen.findAllByTestId('product-list-item');

		await userEvent.click(productListItems[0]);

		const productDetailButton = screen.queryByTestId('product-detail-button');

		expect(productDetailButton).not.toBeNull();
	});
});
