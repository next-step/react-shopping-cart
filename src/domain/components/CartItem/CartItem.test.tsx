import * as stories from './CartItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/rtkProvider';

const { UnCheckedItem, CheckedItem } = composeStories(stories);
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('CartItem의 UnCheckedItem 스토리북 렌더링 검증 테스트', () => {
  test('체크박스가 체크되어있으면 안된다.', () => {
    render(<UnCheckedItem />);
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();
  });
  test('냉면용기 (대) 이미지가 존재 한다.', () => {
    render(<UnCheckedItem />);
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName('냉면용기(대)');
  });
  test('UnCheckedItem input값은 1이다.', () => {
    render(<UnCheckedItem />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1');
  });
  test('상품가격은 83700원이다.', async () => {
    render(<UnCheckedItem />);
    const price = screen.getByTestId('cartItem-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('상품이름은 냉면용기(대) 이다.', async () => {
    render(<UnCheckedItem />);
    const name = screen.getByTestId('cartItem-name');
    expect(name).toHaveTextContent('냉면용기');
  });
});

describe('CartItem의 CheckedItem 스토리북 검증 테스트', () => {
  test('체크박스가 체크 되어 있다.', () => {
    render(<CheckedItem />);
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeChecked();
  });
  test('냉면용기 (대) 이미지가 존재 한다.', () => {
    render(<CheckedItem />);
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName('냉면용기(대)');
  });
  test('초기 input값은 1이다.', async () => {
    render(<CheckedItem />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1');
  });
  test('상품 가격은 83700원 이다', async () => {
    render(<CheckedItem />);
    const price = screen.getByTestId('cartItem-price');
    expect(price).toHaveTextContent('83700원');
  });
  test('상품이름은 냉면용기(대) 이다.', async () => {
    render(<CheckedItem />);
    const name = screen.getByTestId('cartItem-name');
    expect(name).toHaveTextContent('냉면용기');
  });
});
describe('CartItem의 CheckedItem 스토리북 행위 테스트', () => {
  test('increaseButton을 누르면 input Value는 2가 된다.', async () => {
    render(<CheckedItem />);
    const buttons = screen.getAllByRole('button');
    const increaseButton = buttons[0];

    await userEvent.click(increaseButton);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('2');
  });
  test('inputValue가 2일떄 decreaseButton을 누르면 input Value는 1이 된다.', async () => {
    render(<CheckedItem />);
    const buttons = screen.getAllByRole('button');

    const increaseButton = buttons[0];
    const decreaseButton = buttons[1];

    await userEvent.click(increaseButton);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('2');

    await userEvent.click(decreaseButton);
    const changeInput = screen.getByRole('textbox');
    expect(changeInput).toHaveValue('1');
  });

  test('inputValue가 1일떄 decreaseButton을 누르면 alert가 호출된다.', async () => {
    render(<CheckedItem />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1');

    const buttons = screen.getAllByRole('button');
    const decreaseButton = buttons[1];
    await userEvent.click(decreaseButton);

    expect(window.alert).toBeCalled();
  });
});

describe('CartItem의 UnCheckedItem 스토리북 행위 테스트', () => {
  test('increaseButton을 누르면 input Value는 2가 된다.', async () => {
    render(<UnCheckedItem />);
    const buttons = screen.getAllByRole('button');
    const increaseButton = buttons[0];

    await userEvent.click(increaseButton);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('2');
  });

  test('inputValue가 2일떄 decreaseButton을 누르면 input Value는 1이 된다.', async () => {
    render(<UnCheckedItem />);
    const buttons = screen.getAllByRole('button');
    const increaseButton = buttons[0];
    const decreaseButton = buttons[1];

    await userEvent.click(increaseButton);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('2');

    await userEvent.click(decreaseButton);
    const changeInput = screen.getByRole('textbox');
    expect(changeInput).toHaveValue('1');
  });

  test('inputValue가 1일떄 decreaseButton을 누르면 alert가 호출 된다.', async () => {
    render(<UnCheckedItem />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1');

    const buttons = screen.getAllByRole('button');
    const decreaseButton = buttons[1];

    await userEvent.click(decreaseButton);

    expect(window.alert).toBeCalled();
  });
});
