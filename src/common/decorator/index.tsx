import { Provider } from 'react-redux';
import { PaymentAppContextProvider } from 'payment-junyoung';
import store from 'store';
import { DecoratorFn } from '@storybook/react';

export const reduxDecorator: DecoratorFn = (Story) => {
  return (
    <Provider store={store}>
      <PaymentAppContextProvider>
        <Story />
      </PaymentAppContextProvider>
    </Provider>
  );
};
