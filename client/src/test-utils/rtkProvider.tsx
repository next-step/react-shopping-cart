import { render as rtlRender } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import type { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RootState, AppStore, setupStore } from 'store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const render = (
  ui: ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>;
      </MemoryRouter>
    );
  }
  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
};
