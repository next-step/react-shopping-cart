import * as stories from './ProductItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test/rtkProvider';
const { Item } = composeStories(stories);

describe('ProductItem 스토리북 렌더링 테스트', () => {
  test('이미지가 존재 해야한다', async () => {
    render(<Item />);
    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
  });
  test('냉면용기(대)라는 이름이 존재해야 한다', async () => {
    render(<Item />);
    const title = await screen.findByText('냉면용기(대)');
    expect(title).toBeInTheDocument();
  });
  test('가격은 83700원 이어야한다.', async () => {
    render(<Item />);
    const price = await screen.findByText('83700원');
    expect(price).toBeInTheDocument();
  });
  test('장바구니 버튼이 존재해야한다.', async () => {
    render(<Item />);
    const cartButton = await screen.findByTestId('cart-button');
    expect(cartButton).toBeInTheDocument();
  });
});
