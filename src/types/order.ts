export interface Order {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export interface OrderList {
  orderListId: string
  orders: Order[]
}
