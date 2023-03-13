import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import { Cart } from 'pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Cart />
    </>
  );
}

export default App;
