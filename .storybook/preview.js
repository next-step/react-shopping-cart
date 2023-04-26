import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-react-router-v6';
import store from 'store';
import { handlers } from '../src/mocks/server/handlers/index';
import { reduxDecorator } from '../src/decorator/index';

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
