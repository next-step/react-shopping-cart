import * as stories from './Spinner.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from '../../../test/rtkProvider';

const { Default } = composeStories(stories);

describe('Spinner 스토리북 렌더링 검증 테스트', () => {
  test('Spinner가 렌더링되어야한다.', async () => {
    render(<Default />);
    const Spinner = await screen.findByTestId('spinner');

    expect(Spinner).toBeInTheDocument();
  });
});
