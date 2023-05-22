import * as stories from './ProductDetailItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { DetailItem } = composeStories(stories);

describe('ProductDetailItem 스토리북 렌더링 테스트', () => {
  test('상품 이미지가 존재 해야한다', async () => {
    render(<DetailItem />);
    const image = await screen.findByTestId('productDetail-image');
    expect(image).toBeInTheDocument();
  });
  test('상품 이름은 냉면용기(대)여야 한다', async () => {
    render(<DetailItem />);
    const name = await screen.findByTestId('productDetail-name');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
  test('상품 금액 83700 이어야한다.', async () => {
    render(<DetailItem />);
    const price = await screen.findByTestId('productDetail-price');
    expect(price).toHaveTextContent('83700');
  });
  test('장바구니 버튼이 존재해야한다.', async () => {
    render(<DetailItem />);
    const cartButton = await screen.findByTestId('cart-button');
    expect(cartButton).toHaveTextContent('장바구니');
  });
  test('수평바가 존재해야한다.', async () => {
    render(<DetailItem />);
    const horizontalLine = await screen.findByTestId('horizontalLine');
    expect(horizontalLine).toBeInTheDocument();
  });
});
