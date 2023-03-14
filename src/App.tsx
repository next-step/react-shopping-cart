import { Header } from './components/molecules';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './css/index.css';

export default function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}/>
    </div>
  );
}
