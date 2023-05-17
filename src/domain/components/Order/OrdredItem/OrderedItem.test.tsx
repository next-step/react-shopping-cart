import * as stories from './OrderdItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Default } = composeStories(stories);

describe('OrderedItem 렌더링 검증 테스트', () => {
  test('냉면용기 (대)가 되어야 한다.', async () => {
    render(<Default />);
    const itemTitle = await screen.findByText('냉면용기(대)');
    expect(itemTitle).toBeInTheDocument();
  });
  test('수량 :1이 되어야 한다', async () => {
    render(<Default />);
    const amount = await screen.findByText('수량:1');
    expect(amount).toBeInTheDocument();
  });
  test('가격:83700원이 되어야한다.', async () => {
    render(<Default />);
    const price = await screen.findByText('가격: 83700원');
    expect(price).toBeInTheDocument();
  });
  test('아이템 이미지가 존재해야 된다', async () => {
    render(<Default />);
    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
  });
});
