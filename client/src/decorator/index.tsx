import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'utils/redux-persist';
import store from 'store';
import { DecoratorFn } from '@storybook/react';

export const reduxDecorator: DecoratorFn = (Story) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Story />
      </PersistGate>
    </Provider>
  );
};
