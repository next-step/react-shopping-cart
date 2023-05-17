import * as stories from './ProductDetailItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { DetailItem } = composeStories(stories);

describe('ProductDetailItem 스토리북 렌더링 테스트', () => {
  test('이미지가 존재 해야한다', async () => {
    render(<DetailItem />);
    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
  });
  test('냉면용기(대)라는 이름이 존재해야 한다', async () => {
    render(<DetailItem />);
    const title = await screen.findByText('냉면용기(대)');
    expect(title).toBeInTheDocument();
  });
  test('금액 83700 이어야한다.', async () => {
    render(<DetailItem />);
    const price = await screen.findByText('83700');
    expect(price).toBeInTheDocument();
  });
  test('장바구니 버튼이 존재해야한다.', async () => {
    render(<DetailItem />);
    const cartButton = await screen.findByRole('button');
    expect(cartButton.innerHTML).toBe('장바구니');
  });
  test('수평바가 존재해야한다.', async () => {
    render(<DetailItem />);
    const horizontalLine = await screen.findByTestId('horizontalLine');
    expect(horizontalLine).toBeInTheDocument();
  });
});
