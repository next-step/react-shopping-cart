import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/ui/Header'
import { ProductApiProvder } from './context/productApiContext'

function App() {
  return (
    <ProductApiProvder>
      <Header />
      <Outlet />
    </ProductApiProvder>
  )
}

export default App
