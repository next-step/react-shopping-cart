import * as stories from './ProductDetailItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { DetailItem } = composeStories(stories);

describe('ProductDetailItem 스토리북 테스트', () => {
  test('상품 이미지는 냉면용기(대)이다.', () => {
    render(<DetailItem />);
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName('냉면용기(대)');
  });
  test('상품 이름은 냉면용기(대)이다.', () => {
    render(<DetailItem />);
    const productName = screen.getByTestId('product-name');
    expect(productName).toHaveTextContent('냉면용기(대)');
  });
  test('상품 금액은 83700원 이다.', () => {
    render(<DetailItem />);
    const price = screen.getByTestId('product-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('장바구니 버튼이 존재 한다.', () => {
    render(<DetailItem />);
    const cartButton = screen.getByRole('button', { name: '장바구니' });
    expect(cartButton).toHaveTextContent('장바구니');
  });
  test('수평바가 존재한다.', () => {
    render(<DetailItem />);
    const horizontalLine = screen.getByRole('banner');
    expect(horizontalLine).toBeInTheDocument();
  });
});
