import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import OrderList from './orders/pages/OrderList'
import ProductList from './products/pages/ProductList'
import ShoppingBack from './shoppingBack/pages/ShoppingBack'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/shoppingBack' element={<ShoppingBack />} />
      <Route path='/orderList' element={<OrderList />} />
    </Routes>
  )
}

export default App
