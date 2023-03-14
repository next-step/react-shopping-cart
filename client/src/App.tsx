import GlobalStyle from 'styles/GlobalStyle';
import { NavBar } from 'components/NavBar';
import { OrderList } from 'pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <OrderList />
    </>
  );
}

export default App;
