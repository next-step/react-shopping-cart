import { expect, describe, it, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter, renderHookWithQueryClient } from 'src/shared/mock/mockForTest';
import useGetProductDetailQuery from 'src/entities/product/hooks/useGetProductDetailQuery';
import { formatPriceToKRW } from 'src/shared/lib/format';
import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

describe('상품 상세 페이지 테스트', () => {
	beforeEach(() => {
		renderMemoryRouter({ initialEntries: ['/product/1'] });
	});

	it('상품 상세 api로 호출된 데이터를 화면에 나타낸다.', async () => {
		const { result } = renderHookWithQueryClient(() => useGetProductDetailQuery('1'));

		await waitFor(() => {
			expect(screen.queryByText(result.current.data?.name ?? '')).not.toBeNull();
			expect(screen.queryByText(formatPriceToKRW(result.current.data?.price ?? 0))).not.toBeNull();
		});
	});

	it('장바구니 버튼을 클릭하면 alert가 팝업되며 장바구니에 해당 상품이 추가된다.', async () => {
		const productCartButton = await screen.findByTestId('product-detail-button');

		await userEvent.click(productCartButton);

		const alert = screen.queryByTestId('alert');

		expect(alert).not.toBeNull();

		const { result } = renderHookWithQueryClient(() => useGetCartItemListQuery());

		await waitFor(() => {
			expect(result.current.data?.at(0)?.product.id).toBe('1');
		});
	});
});
