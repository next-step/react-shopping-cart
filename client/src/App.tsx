import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import { Order } from 'pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
    </>
  );
}

export default App;
