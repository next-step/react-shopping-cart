import * as stories from './CartItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/rtkProvider';

const { DefaultItem } = composeStories(stories);
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('CartItem의 스토리북 렌더링 검증 테스트', () => {
  test('체크박스는 체크되어있으면 안된다.', async () => {
    render(<DefaultItem />);
    const checkBox = await screen.findByRole('checkbox');
    expect(checkBox).not.toBeChecked();
  });
  test('상품 이미지가 존재 해야 한다', async () => {
    render(<DefaultItem />);
    const image = await screen.findByTestId('cart-image');
    expect(image).toBeInTheDocument();
  });
  test('input값은 1이어야한다.', async () => {
    render(<DefaultItem />);
    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('1');
  });
  test('가격은 83700원이어야 한다.', async () => {
    render(<DefaultItem />);
    const price = await screen.findByTestId('cart-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('상품의 이름은 냉면용기(대)이어야 한다', async () => {
    render(<DefaultItem />);
    const name = await screen.findByTestId('cart-productName');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
});

describe('CartItem 스토리북 행위 테스트', () => {
  test('checkBox를 누르면 check되어야 한다.', async () => {
    render(<DefaultItem />);
    const checkBox = await screen.findByRole('checkbox');
    await userEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  test('increaseButton을 누르면 input Value는 2가되어야한다.', async () => {
    render(<DefaultItem />);
    const increaseButton = await screen.findByTestId('increase-button');
    await userEvent.click(increaseButton);
    const input = await screen.findByTestId('cart-input');

    expect(input).toHaveValue('2');
  });
  test('inputValue가 2일떄 decreaseButton을 누르면 input Value는 1이 되어야한다.', async () => {
    render(<DefaultItem />);
    const increaseButton = await screen.findByTestId('increase-button');
    const decreaseButton = await screen.findByTestId('decrease-button');

    await userEvent.click(increaseButton);
    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('2');
    // input value=2

    await userEvent.click(decreaseButton);
    const changeInput = await screen.findByTestId('cart-input');

    expect(changeInput).toHaveValue('1');
  });

  test('inputValue가 1일떄 decreaseButton을 누르면 alert창이 나온다.', async () => {
    render(<DefaultItem />);

    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('1');

    const decreaseButton = await screen.findByTestId('decrease-button');
    await userEvent.click(decreaseButton);

    expect(window.alert).toBeCalled();
  });
});
