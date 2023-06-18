import * as stories from './ErrorMessage.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Default } = composeStories(stories);

describe('ErrorMessage 스토리북 렌더링 검증 테스트', () => {
  test('ErrorMessageButton은 Try Again이라는 Text가 존재한다.', async () => {
    render(<Default />);
    const ErrorMessageButton = await screen.findByRole('button');
    expect(ErrorMessageButton).toHaveTextContent('Try Again');
  });
  test('ErrorMessage text는 데이터를 가져오는데 실패하였습니다 이다', async () => {
    render(<Default />);
    const ErrorMessageButton = await screen.findByText('데이터를 가져오는데 실패하였습니다.');
    expect(ErrorMessageButton).toBeInTheDocument();
  });
  test('Error Icon이 존재 한다', async () => {
    render(<Default />);
    const errorIcon = await screen.findByTestId('error-icon');
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

  test('ErrorMessageButton를 누르면 refresh가 호출 된다.', async () => {
    render(<Default />);

    const ErrorMessageButton = await screen.findByRole('button');
    await userEvent.click(ErrorMessageButton);

    expect(window.location.reload).toHaveBeenCalled();
  });
});
