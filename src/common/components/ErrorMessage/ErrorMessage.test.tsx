import * as stories from './ErrorMessage.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Default } = composeStories(stories);

describe('Default ErrorMessageButton 렌더링 검증 테스트', () => {
  test('Default ErrorMessageButton render test', async () => {
    render(<Default />);
    const ErrorMessageButton = (await screen.findByRole('button')).innerHTML;
    expect(ErrorMessageButton).toBe('Try Again');
  });
  test('Default ErrorMessageButton children text test', async () => {
    render(<Default />);
    const ErrorMessageButton = await screen.findByText('데이터를 가져오는데 실패하였습니다.');
    expect(ErrorMessageButton).toBeInTheDocument();
  });
  test('Default ErrorMessageButton ErrorIcon render test', async () => {
    render(<Default />);
    const errorIcon = await screen.findByRole('img');
    expect(errorIcon).toBeInTheDocument();
  });
});

describe('Default ErrorMessageButton click test', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  test('Default ErrorMessageButton를 누르면 refresh가 호출된다.', async () => {
    render(<Default />);

    const ErrorMessageButton = await screen.findByRole('button');
    await userEvent.click(ErrorMessageButton);

    expect(window.location.reload).toHaveBeenCalled();
  });
});
