import * as stories from './ProductListPage.stories';
import { screen, waitFor, act } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test/rtkProvider';
import { setupServer } from 'msw/node';

import { handlers } from '../mockserver';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const { Default } = composeStories(stories);

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ProductListPage 렌더링 테스트', () => {
  test('초기에는 로딩 스피너가 나타나야한다', async () => {
    render(<Default />);
    const Spinner = await screen.findByTestId('spinner');

    expect(Spinner).toBeInTheDocument();
  });

  test('상품의 이미지,가격,이름,장바구니버튼은 8개여야 한다', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const productsimg = screen.getAllByRole('img');
        expect(productsimg).toHaveLength(8);
      },
      { timeout: 3000 }
    );
    const productsprice = screen.getAllByTestId('product-price');
    const productsName = screen.getAllByTestId('product-name');
    const cartButton = screen.getAllByTestId('cart-button');

    expect(productsprice).toHaveLength(8);
    expect(productsName).toHaveLength(8);
    expect(cartButton).toHaveLength(8);
  });

  test('ProductPage 페이지의 페이지네이션 버튼은 5개여야한다', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const paginationButton = screen.getAllByTestId('pagination-button');
        expect(paginationButton).toHaveLength(5);
      },
      { timeout: 3000 }
    );
  });
});

describe('ProductList 페이지 네이션 기능 테스트', () => {
  test('다음 페이지 네이션 버튼을 누르면 8개의 이미지,가격,카트버튼, 이름이 렌더링 되어야한다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const paginationButtons = screen.getAllByTestId('pagination-button');
        expect(paginationButtons).toHaveLength(5);
      },
      { timeout: 3000 }
    );
    const paginationButtons = screen.getAllByTestId('pagination-button');
    const button = paginationButtons[1];
    await userEvent.click(button);

    await waitFor(
      () => {
        const productsimg = screen.getAllByRole('img');
        expect(productsimg).toHaveLength(8);
      },
      { timeout: 3000 }
    );
    const productsprice = screen.getAllByTestId('product-price');
    const cartButton = screen.getAllByTestId('cart-button');
    const productsName = screen.getAllByTestId('product-name');

    expect(productsName).toHaveLength(8);
    expect(productsprice).toHaveLength(8);
    expect(cartButton).toHaveLength(8);
  });
});
