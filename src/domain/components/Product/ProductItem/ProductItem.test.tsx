import * as stories from './ProductItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Item } = composeStories(stories);

describe('ProductItem 스토리북 렌더링 테스트', () => {
  test('상품의 이미지가 존재 해야한다', async () => {
    render(<Item />);
    const image = await screen.findByTestId('product-image');
    expect(image).toBeInTheDocument();
  });
  test('상품의 이름은 냉면용기(대)여야 한다.', async () => {
    render(<Item />);
    const name = await screen.findByTestId('product-name');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
  test('가격은 83700원 이어야한다.', async () => {
    render(<Item />);
    const price = await screen.findByTestId('product-price');
    expect(price).toHaveTextContent('83700');
  });
  test('장바구니 아이콘 버튼이 존재해야한다.', async () => {
    render(<Item />);
    const cartButton = await screen.findByTestId('cart-button');
    expect(cartButton).toHaveTextContent('cart.svg');
  });
});
