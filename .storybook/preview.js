import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-react-router-v6';

import { handlers } from '../src/domain/api/handlers/index';
import { reduxDecorator } from '../src/common/decorator/index';

initialize();
export const decorators = [mswDecorator, withRouter, reduxDecorator];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  msw: {
    handlers: [handlers],
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
