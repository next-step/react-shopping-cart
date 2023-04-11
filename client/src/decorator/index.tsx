import { Provider } from 'react-redux';

import store from 'store';
import { DecoratorFn } from '@storybook/react';

export const reduxDecorator: DecoratorFn = (Story) => {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
