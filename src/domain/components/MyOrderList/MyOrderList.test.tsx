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
  test('상품의 이름은 냉면용기(대)이다.', () => {
    render(<Default />);
    const productName = screen.getByText('냉면용기(대)');
    expect(productName).toBeInTheDocument();
  });
  test('상품 이미지가 존재 한다.', () => {
    render(<Default />);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
  test('주문번호 : 1이 존재 한다.', () => {
    render(<Default />);
    const orderNumber = screen.getByText('주문번호 : 1');
    expect(orderNumber).toBeInTheDocument();
  });
  test('버튼이름은 상세보기이다.', () => {
    render(<Default />);
    const detailButton = screen.getByRole('button');
    expect(detailButton).toHaveTextContent('상세보기');
  });

  test('83700원 / 수량 : 1 텍스트가 존재한다', () => {
    render(<Default />);
    const priceAndAmount = screen.getByText('83700원 / 수량 : 1개');
    expect(priceAndAmount).toBeInTheDocument();
  });
});

describe('MyOrderList 스토리북 행위 테스트', () => {
  test('상세보기를 클릭하면 pathname :1 과 함께 navigate가 호출 된다.', async () => {
    render(<Default />);
    const detailButton = screen.getByRole('button');
    await userEvent.click(detailButton);
    expect(mockedUsedNavigate).toBeCalledWith({ pathname: '1' });
  });
});
