import Navbar from "./components/Navbar/Navbar";
import "./css/index.css";

function App() {
  return (
    <div id="app" className="app-container">
      <Navbar>
        <button className="nav-button">장바구니</button>
        <button className="nav-button">주문목록</button>
      </Navbar>
    </div>
  );
}

export default App;
