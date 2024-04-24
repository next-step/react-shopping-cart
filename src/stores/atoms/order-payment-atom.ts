import { CartGroupedData } from '@/types/api-type'
import { atom } from 'jotai'

export const ORDER_PAYMENT_ATOM_LOCALSTORAGE_KEY = '@sxungchxn/cart__order-payment'

const getInitialStorageValue = () => {
  const storageValue = localStorage.getItem(ORDER_PAYMENT_ATOM_LOCALSTORAGE_KEY)
  if (storageValue) return JSON.parse(storageValue) as CartGroupedData[]
  return []
}

const _orderPaymentAtom = atom<CartGroupedData[]>(getInitialStorageValue())

export const orderPaymentAtom = atom(
  get => get(_orderPaymentAtom),
  (_, set, newValue: CartGroupedData[]) => {
    set(_orderPaymentAtom, newValue)
    localStorage.setItem(ORDER_PAYMENT_ATOM_LOCALSTORAGE_KEY, JSON.stringify(newValue))
  },
)
