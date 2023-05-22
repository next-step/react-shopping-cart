import * as stories from './MyOrderList.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/rtkProvider';
const { Default } = composeStories(stories);

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('MyOrderList 스토리북 렌더링 검증 테스트', () => {
  test('상품의 이름은 냉면용기(대)여야 되어야한다.', async () => {
    render(<Default />);
    const name = await screen.findByTestId('order-name');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
  test('상품의 이미지가 존재 해야한다.', async () => {
    render(<Default />);
    const image = await screen.findByTestId('order-image');
    expect(image).toBeInTheDocument();
  });
  test('주문번호 : 1이 존재 해야한다.', async () => {
    render(<Default />);
    const orderNumber = await screen.findByTestId('order-number');
    expect(orderNumber).toHaveTextContent('주문번호 : 1');
  });
  test('상세보기 버튼이 존재 해야한다.', async () => {
    render(<Default />);
    const detailButton = await screen.findByTestId('orderDetail-button');
    expect(detailButton).toHaveTextContent('상세보기');
  });

  test('가격과 수량 정보는 83700원 / 수량 : 1이어야한다.', async () => {
    render(<Default />);
    const priceAndAmount = await screen.findByTestId('order-info');
    expect(priceAndAmount).toHaveTextContent('83700원 / 수량 : 1개');
  });
});

describe('MyOrderList 스토리북 행위 테스트', () => {
  test('상세보기를 클릭하면 navigate가 호출이 되어야한다.', async () => {
    render(<Default />);
    const detailButton = await screen.findByTestId('orderDetail-button');
    await userEvent.click(detailButton);
    expect(mockedUsedNavigate).toBeCalled();
  });
});
