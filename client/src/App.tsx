import React from 'react';
import ProductListPage from 'pages/ProductList/ProductList';
import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import ProductDetailPage from './pages/ProductDetail/ProductDetail';
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {/* <ProductListPage /> */}
      <ProductDetailPage />
    </>
  );
}

export default App;
