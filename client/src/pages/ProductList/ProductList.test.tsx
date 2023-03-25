import { render, screen, waitFor } from '@testing-library/react';
import ProductList from './ProductList';

describe('ProductList 페이지 테스트', () => {
  test('ProductItem이 올바르게 렌더링된다', async () => {
    render(<ProductList />);
    const productItem = screen.queryByTestId('product');

    await waitFor(() => expect(productItem).toBeInTheDocument());
  });
});
