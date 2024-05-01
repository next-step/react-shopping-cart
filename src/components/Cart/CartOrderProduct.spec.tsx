import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, fireEvent } from '@testing-library/react';
import { CartOrderProduct } from './CartOrderProduct';
import { products } from '@/mocks/data/shoppingCartWorld.ts';
import { formatNumberWithCommas } from '@/utils';

const queryClient = new QueryClient();
const product = products[0]; // 테스트 상품 데이터 사용

const cartItem = {
  product,
  quantity: 1,
  checked: true,
};

describe('CartOrderProduct 컴포넌트', () => {
  const renderCartOrderProduct = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <CartOrderProduct
          type="cart"
          product={cartItem.product}
          checked={cartItem.checked}
          quantity={cartItem.quantity}
        />
      </QueryClientProvider>,
    );

  it('상품 정보가 정확하게 렌더링되어야 한다', () => {
    const { getByText } = renderCartOrderProduct();
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(`${formatNumberWithCommas(product.price)}원`)).toBeInTheDocument();
  });

  it('체크박스 토글이 상태가 반영되어야 한다', async () => {
    const { getByRole } = renderCartOrderProduct();
    const checkbox = getByRole('checkbox');
    await fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
