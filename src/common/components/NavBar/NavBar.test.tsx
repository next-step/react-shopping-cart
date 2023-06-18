import * as stories from './NavBar.stories';
import { render } from 'test/rtkProvider';
import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const { PageNavBar } = composeStories(stories);

describe('PageNavBar 스토리북 렌더링 검증 테스트', () => {
  test('Title이 존재해야한다.', async () => {
    render(<PageNavBar />);
    const title = await screen.findByText('JunYoung SHOP');
    expect(title).toBeInTheDocument();
  });

  test('장바구니 버튼이 존재해야한다.', async () => {
    render(<PageNavBar />);
    const buttons = await screen.findAllByRole('button');
    const CartButton = buttons[0].innerHTML;
    expect(CartButton).toBe('장바구니');
  });
  test('나의 주문목록 버튼이 존재해야한다.', async () => {
    render(<PageNavBar />);
    const buttons = await screen.findAllByRole('button');
    const MyOrderButton = buttons[1].innerHTML;
    expect(MyOrderButton).toBe('나의 주문목록');
  });
});
describe('NavBar버튼 스토리북 동작 여부 테스트', () => {
  test('나의 JunyoungShop을 클릭시 useNavigate는 /orders를 호출한다..', async () => {
    render(<PageNavBar />);
    const title = await screen.findByText('JunYoung SHOP');
    await userEvent.click(title);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/products');
  });

  test('장바구니 버튼이 클릭시 useNavigate는 /carts를 호출한다.', async () => {
    render(<PageNavBar />);
    const CartButton = await screen.findByText('장바구니');

    await userEvent.click(CartButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/carts');
  });
  test('나의 주문목록 버튼이 클릭시 useNavigate는 /orders를 호출한다.', async () => {
    render(<PageNavBar />);
    const MyOrderButton = await screen.findByText('나의 주문목록');
    await userEvent.click(MyOrderButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/orders');
  });
});
