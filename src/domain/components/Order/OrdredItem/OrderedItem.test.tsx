import * as stories from './OrderdItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
const { Default } = composeStories(stories);

describe('OrderedItem 스토리북 렌더링 검증 테스트', () => {
  test('상품이름은 냉면용기 (대) 이다.', () => {
    render(<Default />);
    const productName = screen.getByTestId('order-name');
    expect(productName).toHaveTextContent('냉면용기(대)');
  });

  test('상품 수량은 수량:1 이다.', () => {
    render(<Default />);
    const amount = screen.getByTestId('order-amount');
    expect(amount).toHaveTextContent('수량:1');
  });
  // 컴포넌트 잘못설계된게 인지됨

  test('상품 가격은 : 83700원 이다.', () => {
    render(<Default />);
    const price = screen.getByTestId('order-price');
    expect(price).toHaveTextContent('가격: 83700원');
  });
  // 컴포넌트 잘못설계된게 인지됨
  test('냉면용기(대) 상품 이미지가 존재한다.', () => {
    render(<Default />);
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName('냉면용기(대)');
  });
});
