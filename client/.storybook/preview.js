import { initialize, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw';
import products from '../src/mocks/server/data/products.json';
import { withRouter } from 'storybook-addon-react-router-v6';

initialize();
// Provide the MSW addon decorator globally
export const decorators = [mswDecorator, withRouter];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  msw: {
    handlers: [
      rest.get('/products', (req, res, ctx) => {
        return res(ctx.json(products));
      }),
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
