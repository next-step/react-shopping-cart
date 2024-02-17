import * as stories from './Pagination.stories';
import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { render } from 'test/rtkProvider';
import userEvent from '@testing-library/user-event';

const { Default } = composeStories(stories);

describe('Pagination 스토리북 렌더링 검증 테스트', () => {
  test('페이지 네이션 버튼의 개수는 3개 이다.', () => {
    render(<Default />);
    const PaginationButtons = screen.getAllByRole('button');

    expect(PaginationButtons).toHaveLength(3);
  });
});
describe('Pagination 스토리북 버튼 테스트', () => {
  test('현재 활성화된 페이지네이션 버튼의 opactiy값은 1이다.', () => {
    render(<Default />);
    const PaginationButtons = screen.getAllByRole('button');
    const currentPaginationButton = PaginationButtons[0];

    expect(currentPaginationButton).toHaveStyle({ opacity: 1 });
  });
  test('현재 활성화된 페이지네이션 버튼의 외의 버튼의 opactiy값은 0.3이다.', () => {
    render(<Default />);
    let PaginationButtons = screen.getAllByRole('button');
    PaginationButtons = PaginationButtons.slice(1, PaginationButtons.length);
    PaginationButtons.map((button) => {
      expect(button).toHaveStyle({ opacity: 0.3 });
    });
  });
  test('페이지 네이션 버튼을 클릭하면, 클릭한 버튼의 opacity값은 1이되고 아닌것은 0.3이다.', async () => {
    render(<Default />);
    let PaginationButtons = screen.getAllByRole('button');
    const clickPaginationButton = PaginationButtons[2];
    await userEvent.click(clickPaginationButton);

    PaginationButtons = PaginationButtons.slice(0, PaginationButtons.length - 1);
    PaginationButtons.map((button) => {
      expect(button).toHaveStyle({ opacity: 0.3 });
    });
    expect(clickPaginationButton).toHaveStyle({ opacity: 1 });
  });
});
