import * as stories from './OrderdItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Default } = composeStories(stories);

describe('OrderedItem 스토리북 렌더링 검증 테스트', () => {
  test('냉면용기 (대) Text가 존재한다', () => {
    render(<Default />);
    const productName = screen.getByText('냉면용기(대)');
    expect(productName).toBeInTheDocument();
  });

  test('수량:1 Text가 존재한다', () => {
    render(<Default />);
    const amount = screen.getByText('수량:1');
    expect(amount).toBeInTheDocument();
  });

  test('가격: 83700원 Text가 존재한다.', () => {
    render(<Default />);
    const price = screen.getByText('가격: 83700원');
    expect(price).toBeInTheDocument();
  });
  test('상품 이미지가 존재한다.', () => {
    render(<Default />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
