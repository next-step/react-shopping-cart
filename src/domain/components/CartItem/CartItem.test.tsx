import * as stories from './CartItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/rtkProvider';

const { UnCheckedItem, CheckedItem } = composeStories(stories);
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('CartItem의 UnCheckedItem 스토리북 렌더링 검증 테스트', () => {
  test('체크박스가 체크되어있으면 안된다.', async () => {
    render(<UnCheckedItem />);
    const checkBox = await screen.findByRole('checkbox');
    expect(checkBox).not.toBeChecked();
  });
  test('상품 이미지가 존재 한다.', async () => {
    render(<UnCheckedItem />);
    const image = await screen.findByTestId('cart-image');
    expect(image).toBeInTheDocument();
  });
  test('초기 input값은 1이다.', async () => {
    render(<UnCheckedItem />);
    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('1');
  });
  test('가격은 83700원 이다.', async () => {
    render(<UnCheckedItem />);
    const price = await screen.findByTestId('cart-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('상품 이름은 냉면용기(대) 이다.', async () => {
    render(<UnCheckedItem />);
    const name = await screen.findByTestId('cart-productName');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
});

describe('CartItem의 CheckedItem 스토리북 렌더링 검증 테스트', () => {
  test('체크박스가 체크 되어 있다.', async () => {
    render(<CheckedItem />);
    const checkBox = await screen.findByRole('checkbox');
    expect(checkBox).toBeChecked();
  });
  test('상품 이미지가 존재 한다.', async () => {
    render(<CheckedItem />);
    const image = await screen.findByTestId('cart-image');
    expect(image).toBeInTheDocument();
  });
  test('초기 input값은 1이다.', async () => {
    render(<CheckedItem />);
    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('1');
  });
  test('가격은 83700원이다.', async () => {
    render(<CheckedItem />);
    const price = await screen.findByTestId('cart-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('상품의 이름은 냉면용기(대) 이다.', async () => {
    render(<CheckedItem />);
    const name = await screen.findByTestId('cart-productName');
    expect(name).toHaveTextContent('냉면용기(대)');
  });
});

describe('CartItem의 CheckedItem 스토리북 행위 테스트', () => {
  test('increaseButton을 누르면 input Value는 2가 된다.', async () => {
    render(<CheckedItem />);
    const increaseButton = await screen.findByTestId('increase-button');
    await userEvent.click(increaseButton);
    const input = await screen.findByTestId('cart-input');

    expect(input).toHaveValue('2');
  });
  test('inputValue가 2일떄 decreaseButton을 누르면 input Value는 1이 된다.', async () => {
    render(<CheckedItem />);
    const increaseButton = await screen.findByTestId('increase-button');
    const decreaseButton = await screen.findByTestId('decrease-button');

    await userEvent.click(increaseButton);
    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('2');

    // mocking  input value= 2
    await userEvent.click(decreaseButton);
    const changeInput = await screen.findByTestId('cart-input');
    expect(changeInput).toHaveValue('1');
  });

  test('inputValue가 1일떄 decreaseButton을 누르면 alert가 호출된다.', async () => {
    render(<CheckedItem />);

    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('1');

    const decreaseButton = await screen.findByTestId('decrease-button');
    await userEvent.click(decreaseButton);

    expect(window.alert).toBeCalled();
  });
});

describe('CartItem의 UnCheckedItem 스토리북 행위 테스트', () => {
  test('increaseButton을 누르면 input Value는 2가 된다.', async () => {
    render(<UnCheckedItem />);
    const increaseButton = await screen.findByTestId('increase-button');
    await userEvent.click(increaseButton);
    const input = await screen.findByTestId('cart-input');

    expect(input).toHaveValue('2');
  });

  test('inputValue가 2일떄 decreaseButton을 누르면 input Value는 1이 된다.', async () => {
    render(<UnCheckedItem />);
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

  test('inputValue가 1일떄 decreaseButton을 누르면 alert가 호출 된다.', async () => {
    render(<UnCheckedItem />);

    const input = await screen.findByTestId('cart-input');
    expect(input).toHaveValue('1');

    const decreaseButton = await screen.findByTestId('decrease-button');
    await userEvent.click(decreaseButton);

    expect(window.alert).toBeCalled();
  });
});
