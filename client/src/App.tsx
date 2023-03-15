import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import { OrderList, ProductDetail, OrderListDetail } from 'pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <OrderListDetail />
    </>
  );
}

export default App;
