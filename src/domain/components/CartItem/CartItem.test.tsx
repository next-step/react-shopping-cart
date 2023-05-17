import * as stories from './CartItem.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/rtkProvider';

const { DefaultItem } = composeStories(stories);
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('CartItem의 DefaultItem 스토리북 렌더링 검증 테스트', () => {
  test('체크박스는 체크되어있으면 안된다.', async () => {
    render(<DefaultItem />);
    const checkBox = await screen.findByRole('checkbox');
    expect(checkBox).not.toBeChecked();
  });
  test('이미지가 나타나야한다', async () => {
    render(<DefaultItem />);
    const Image = await screen.findByRole('img');
    expect(Image).toBeInTheDocument();
  });
  test('input값은 1이어야한다.', async () => {
    render(<DefaultItem />);
    const input = await screen.findByRole('textbox');
    const inputValue = input.value;

    expect(inputValue).toBe('1');
  });
  test('가격은 83700원이어야 한다.', async () => {
    render(<DefaultItem />);
    const price = await screen.findByText('83700원');
    expect(price).toBeInTheDocument();
  });
  test('이름은 냉면용기(대)이어야 한다', async () => {
    render(<DefaultItem />);
    const name = await screen.findByText('냉면용기(대)');
    expect(name).toBeInTheDocument();
  });
});

describe('CartItem의 DefaultItem 스토리북 행위 테스트', () => {
  test('checkBox를 누르면 check되어야 한다.', async () => {
    render(<DefaultItem />);
    const checkBox = await screen.findByRole('checkbox');

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
  });

  test('increaseButton을 누르면 input Value는 2가되어야한다.', async () => {
    render(<DefaultItem />);
    const buttons = await screen.findAllByRole('button');
    const increaseButton = buttons[0];

    await userEvent.click(increaseButton);

    const input = await screen.findByRole('textbox');
    const inputValue = input.value;
    expect(inputValue).toBe('2');
  });
  test('inputValue가 2일떄 decreaseButton을 누르면 input Value는 1이 되어야한다.', async () => {
    render(<DefaultItem />);
    const buttons = await screen.findAllByRole('button');
    const increaseButton = buttons[0];
    const decreaseButton = buttons[1];

    await userEvent.click(increaseButton);
    let input = await screen.findByRole('textbox');
    let inputValue = input.value;

    expect(inputValue).toBe('2');

    await userEvent.click(decreaseButton);
    input = await screen.findByRole('textbox');
    inputValue = input.value;

    expect(inputValue).toBe('1');
  });

  test('inputValue가 1일떄 decreaseButton을 누르면 alert창이 나온다.', async () => {
    render(<DefaultItem />);

    const buttons = await screen.findAllByRole('button');
    const decreaseButton = buttons[1];

    await userEvent.click(decreaseButton);

    expect(window.alert).toBeCalled();
  });
});
