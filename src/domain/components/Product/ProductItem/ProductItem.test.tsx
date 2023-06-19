import * as stories from './ProductItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Item } = composeStories(stories);

describe('ProductItem 스토리북 렌더링 테스트', () => {
  test('상품의 이미지가 존재 한다', () => {
    render(<Item />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
  test('냉면 용기(대) Text가 존재한다.', () => {
    render(<Item />);
    const name = screen.getByText('냉면용기(대)');
    expect(name).toBeInTheDocument();
  });
  test('83000 텍스트가 존재한다.', () => {
    render(<Item />);
    const price = screen.getByText('냉면용기(대)');
    expect(price).toBeInTheDocument();
  });
  test('장바구니 아이콘 버튼 존재한다.', () => {
    render(<Item />);
    const cartButton = screen.getByRole('button');
    expect(cartButton).toBeInTheDocument();
  });
});
