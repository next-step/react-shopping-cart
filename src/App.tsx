import { Suspense } from 'react';
import './App.css';
import Products from '@/components/product';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>loading...</h2>}>
        <Products />
      </Suspense>
      ;
    </div>
  );
}

export default App;
