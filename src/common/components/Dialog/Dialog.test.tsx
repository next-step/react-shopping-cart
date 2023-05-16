import * as stories from './Dialog.stories';
import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';

const { Default } = composeStories(stories);

describe('Dialog 스토리북 렌더링 검증 테스트', () => {
  test('Dialog에는 확인 버튼이 있어야한다.', async () => {
    render(<Default />);
    const DialogButton = await screen.findAllByRole('button');
    const ConfirmButton = DialogButton[0].innerHTML;
    expect(ConfirmButton).toEqual('확인');
  });
  test('Dialog에는 취소 버튼이 있어야한다.', async () => {
    render(<Default />);
    const DialogButton = await screen.findAllByRole('button');
    const CancelButton = DialogButton[1].innerHTML;
    expect(CancelButton).toEqual('취소');
  });
  test('Dialog에는 title이 존재해야한다.', async () => {
    render(<Default />);
    const DialogTitle = (await screen.findByRole('heading')).innerHTML;
    expect(DialogTitle).toEqual('모달창');
  });
});
