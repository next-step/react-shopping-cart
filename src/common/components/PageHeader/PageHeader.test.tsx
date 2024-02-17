import * as stories from './PageHeader.stories';
import { screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import { render } from '../../../test/rtkProvider';

const { Default } = composeStories(stories);

describe('PageHeader 스토리북 렌더링 검증 테스트', () => {
  test('Page Header 텍스트는 Page Header 이다.', () => {
    render(<Default />);
    const pageHeader = screen.getByRole('heading');
    expect(pageHeader).toHaveTextContent('Page Header');
  });
});
