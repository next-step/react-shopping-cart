import * as stories from './Spinner.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from '../../../test/rtkProvider';

const { Default } = composeStories(stories);

describe('Spinner 스토리북 렌더링 검증 테스트', () => {
  test('Spinner 존재한다.', () => {
    render(<Default />);
    const spinnerImage = screen.getByRole('img');

    expect(spinnerImage).toBeInTheDocument();
  });
});
