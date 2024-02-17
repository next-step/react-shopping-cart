import * as stories from './ErrorMessage.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Default } = composeStories(stories);

describe('ErrorMessage 스토리북 테스트', () => {
  test('ErrorMessageButton Text는 Try Again 이다.', () => {
    render(<Default />);
    const ErrorMessageButton = screen.getByRole('button');
    expect(ErrorMessageButton).toHaveTextContent('Try Again');
  });
  test('ErrorMessage의 제목은 Error 이다.', () => {
    render(<Default />);
    const ErrorMessageTitle = screen.getByRole('heading');
    expect(ErrorMessageTitle).toHaveTextContent('Error');
  });
  test('ErrorMessage는 데이터를 가져오는데 실패하였습니다 이다.', () => {
    render(<Default />);
    const ErrorMessageContent = screen.getByText('데이터를 가져오는데 실패하였습니다.');
    expect(ErrorMessageContent).toBeInTheDocument();
  });
  test('Error Icon이 존재 한다', () => {
    render(<Default />);
    const errorIcon = screen.getByRole('img');
    expect(errorIcon).toBeInTheDocument();
  });
});

describe('ErrorMessage 스토리북 버튼 테스트', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  test('ErrorMessageButton를 누르면 reload가 호출 된다.', async () => {
    render(<Default />);

    const ErrorMessageButton = await screen.findByRole('button');
    await userEvent.click(ErrorMessageButton);

    expect(window.location.reload).toHaveBeenCalled();
  });
});
