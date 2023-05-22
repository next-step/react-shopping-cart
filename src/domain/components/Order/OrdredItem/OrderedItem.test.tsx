import * as stories from './OrderdItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Default } = composeStories(stories);

describe('OrderedItem 스토리북 렌더링 검증 테스트', () => {
  test('상품이름은 냉면용기 (대)여야 한다.', async () => {
    render(<Default />);
    const name = await screen.findByTestId('orderItem-name');
    expect(name).toHaveTextContent('냉면용기(대)');
  });

  test('상품의 수량 :1이 이어야 한다', async () => {
    render(<Default />);
    const amount = await screen.findByTestId('orderItem-amount');
    expect(amount).toHaveTextContent('수량:1');
  });
  test('상품의 가격은 가격:83700원이 이어야한다.', async () => {
    render(<Default />);
    const price = await screen.findByTestId('orderItem-price');
    expect(price).toHaveTextContent('가격: 83700원');
  });
  test('아이템 이미지가 존재해야 된다', async () => {
    render(<Default />);
    const image = await screen.findByTestId('orderItem-image');
    expect(image).toBeInTheDocument();
  });
});
