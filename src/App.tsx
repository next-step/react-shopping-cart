import React, { PropsWithChildren } from 'react';
import { Header } from './components';
import { CartContextProvider } from './context/CartContext/CartContext';

function App({ children }: PropsWithChildren) {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        {children}
      </div>
    </CartContextProvider>
  );
}

export default App;
