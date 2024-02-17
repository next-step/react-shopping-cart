import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-react-router-v6';

import { reduxDecorator } from '../src/common/decorator/index';

initialize();

export const decorators = [mswDecorator, withRouter, reduxDecorator];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
