import Header from "./components/header/header";
import "../src/css/reset.css";
import Nav from "./components/nav/nav";
import ProductListPage from "./page/list/list";
function App() {
  return (
    <div>
      <Header></Header>
      <Nav/>
      <ProductListPage />
    </div>
  );
}

export default App;
