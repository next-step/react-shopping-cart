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

describe('PageNavBar 스토리북 테스트', () => {
  test('JunYoung SHOP Text가 존재한다.', () => {
    render(<PageNavBar />);
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('JunYoung SHOP');
  });
  test('Cart Image가 존재 한다.', () => {
    render(<PageNavBar />);
    const cartImage = screen.getByRole('img');
    expect(cartImage).toBeInTheDocument();
  });
  test('장바구니 버튼이 존재해야한다.', () => {
    render(<PageNavBar />);
    const buttons = screen.getAllByRole('button');
    const CartButton = buttons[0];
    expect(CartButton).toHaveTextContent('장바구니');
  });
  test('나의 주문목록 버튼이 존재해야한다.', () => {
    render(<PageNavBar />);
    const buttons = screen.getAllByRole('button');
    const MyOrderButton = buttons[1];
    expect(MyOrderButton).toHaveTextContent('나의 주문목록');
  });
});

describe('NavBar버튼 스토리북 동작 테스트', () => {
  test('나의 JunyoungShop을 클릭시 useNavigate는 /orders를 호출한다.', async () => {
    render(<PageNavBar />);
    const title = screen.getByRole('heading');
    await userEvent.click(title);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/products');
  });

  test('장바구니 버튼이 클릭시 useNavigate는 /carts를 호출한다.', async () => {
    render(<PageNavBar />);
    const buttons = screen.getAllByRole('button');
    const CartButton = buttons[0];

    await userEvent.click(CartButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/carts');
  });
  test('나의 주문목록 버튼이 클릭시 useNavigate는 /orders를 호출한다.', async () => {
    render(<PageNavBar />);
    const buttons = screen.getAllByRole('button');
    const MyOrderButton = buttons[1];

    await userEvent.click(MyOrderButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/orders');
  });
});
