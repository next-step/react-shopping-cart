import React from 'react';
import Header from './components/layout/Header';
import Router from './Routing';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
