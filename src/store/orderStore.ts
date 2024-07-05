import { create } from 'zustand';
import createSelectors from '@/store/selectors';
import { persist } from 'zustand/middleware';
import { Order } from '@/types/order';
import { LOCAL_STORAGE_KEYS } from '@/constants/storageKey';

interface OrderState {
  order: Order[];
  addOrder: (order: Order) => void;
  getOrderById: (orderId: Order['id']) => Order | undefined;
  clearOrder: () => void;
  setOrder: (order: Order[]) => void;
}

const useOrderStoreBase = create<OrderState>()(
  persist(
    (set, get) => ({
      order: [],

      addOrder: (order) => {
        set((state) => ({
          order: [...state.order, order],
        }));
      },

      getOrderById: (orderId) =>
        get().order.find((order) => order.id === orderId),

      clearOrder: () => set({ order: [] }),
      setOrder: (order) => set({ order }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.ORDER,
      partialize: (state) => ({ order: state.order }),
      version: 1,
    }
  )
);

const useOrderStore = createSelectors(useOrderStoreBase);

export default useOrderStore;
