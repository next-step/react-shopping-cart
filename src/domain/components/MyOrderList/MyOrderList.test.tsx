import * as stories from './MyOrderList.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/rtkProvider';
const { Default } = composeStories(stories);

describe('MyOrderList 스토리북 검증 테스트', () => {
  test('냉면용기 (대)가 보여야 되어야한다.', async () => {
    render(<Default />);
    const itemTitle = await screen.findByText('냉면용기(대)');
    expect(itemTitle).toBeInTheDocument();
  });
  test('아이템 이미지가 존재 해야한다.', async () => {
    render(<Default />);
    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
  });
  test('주문번호가 존재 해야한다.', async () => {
    render(<Default />);
    const orderNumber = await screen.findByText('주문번호 : 1');
    expect(orderNumber).toBeInTheDocument();
  });
  test('상세보기가 존재 해야한다.', async () => {
    render(<Default />);
    const detail = await screen.findByText('상세보기');
    expect(detail).toBeInTheDocument();
  });
  test('가격과 수량이 존재해야한다.', async () => {
    render(<Default />);
    const priceAndAmount = await screen.findByText('83700원 / 수량 : 1개');
    expect(priceAndAmount).toBeInTheDocument();
  });
});
