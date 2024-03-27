import { createContext, useState } from 'react'

export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}
export interface Order {
  id: number
  orderDetails: Array<Product & { quantity: number }>
}
export interface MyOrder {
  carts: Array<Product>
  order: Array<Order>
}
export const CartsContext = createContext<MyOrder>({ carts: [], order: [] })
export const UpdateCartsContext = createContext<(payload: MyOrder) => void>(() => {})

const CartsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myOrder, setMyOrder] = useState<MyOrder>({ carts: [], order: [] })

  return (
    <>
      <UpdateCartsContext.Provider value={setMyOrder}>
        <CartsContext.Provider value={myOrder}>{children}</CartsContext.Provider>
      </UpdateCartsContext.Provider>
    </>
  )
}

export default CartsProvider
