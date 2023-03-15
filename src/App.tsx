import { Header } from './components/molecules';
import './css/index.css';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}
