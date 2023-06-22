import * as stories from './ProductItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Item } = composeStories(stories);

describe('ProductItem 스토리북 렌더링 테스트', () => {
  test('냉면용기 (대) 상품 이미지가 존재한다', () => {
    render(<Item />);
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName('냉면용기(대)');
  });
  test('상품이름은 냉면 용기(대)이다', () => {
    render(<Item />);
    const name = screen.getByTestId('product-name');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
  test('상품가격은 83700원이다.', () => {
    render(<Item />);
    const price = screen.getByTestId('product-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('장바구니 아이콘 버튼 존재한다.', () => {
    render(<Item />);
    const cartButton = screen.getByRole('button', { name: 'cart.svg' });
    expect(cartButton).toBeInTheDocument();
  });
});
