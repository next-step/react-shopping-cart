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

describe('MyOrderList 스토리북 테스트', () => {
  test('상품이름은 냉면용기(대) 이다.', () => {
    render(<Default />);
    const productName = screen.getByTestId('order-name');
    expect(productName).toHaveTextContent('냉면용기(대)');
  });
  test('상품 이미지는 냉면용기(대) 이다.', () => {
    render(<Default />);
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName('냉면용기(대)');
  });
  test('주문번호는 1이다.', () => {
    render(<Default />);
    const orderNumber = screen.getByTestId('order-number');
    expect(orderNumber).toHaveTextContent('주문번호 : 1');
  });
  test('버튼이름은 상세보기이다.', () => {
    render(<Default />);
    const detailButton = screen.getByRole('button', { name: '상세보기' });
    expect(detailButton).toBeInTheDocument();
  });

  test('상품정보는 83700원 / 수량 : 1 이다.', () => {
    render(<Default />);
    const productInfo = screen.getByTestId('order-info');
    expect(productInfo).toHaveTextContent('83700원 / 수량 : 1개');
  });
});

describe('MyOrderList 스토리북 행위 테스트', () => {
  test('상세보기를 클릭하면 pathname :1 과 함께 navigate가 호출 된다.', async () => {
    render(<Default />);
    const detailButton = screen.getByRole('button', { name: '상세보기' });
    await userEvent.click(detailButton);
    expect(mockedUsedNavigate).toBeCalledWith({ pathname: '1' });
  });
});
