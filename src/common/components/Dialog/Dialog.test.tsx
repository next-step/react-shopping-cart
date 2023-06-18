import * as stories from './Dialog.stories';
import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';

const { Default } = composeStories(stories);

describe('Dialog 스토리북 검증 테스트', () => {
  test('Dialog가 스토리북에 나타난다.', () => {
    render(<Default />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });
  test('Dialog에 버튼이 두개 존재한다.', () => {
    render(<Default />);
    const dialogButtons = screen.getAllByRole('button');
    expect(dialogButtons).toHaveLength(2);
  });

  test('Dialog 버튼 이름은 확인 이다.', () => {
    render(<Default />);
    const dialogButtons = screen.getAllByRole('button');
    const confirmButton = dialogButtons[0];
    expect(confirmButton).toHaveTextContent('확인');
  });
  test('Dialog 버튼 이름은 취소 이다.', () => {
    render(<Default />);
    const dialogButtons = screen.getAllByRole('button');
    const cancleButton = dialogButtons[1];
    expect(cancleButton).toHaveTextContent('취소');
  });

  test('Dialog 타이틀 이름은 모달창 이다.', async () => {
    render(<Default />);
    const dialogTitle = screen.getByRole('heading');
    expect(dialogTitle).toHaveTextContent('모달창');
  });
});
