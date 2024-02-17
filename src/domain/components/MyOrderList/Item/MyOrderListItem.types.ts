import type { OrderProductType } from 'domain/types';

export interface MyOrderListItemProps extends OrderProductType {
  id: number;
}
