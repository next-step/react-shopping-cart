import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'utils/redux-persist';
import store from 'store';
import { handlers } from '../src/mocks/server/handlers/index';

initialize();
export const decorators = [
  mswDecorator,
  withRouter,
  (Story) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Story />
      </PersistGate>
    </Provider>
  ),
];
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
