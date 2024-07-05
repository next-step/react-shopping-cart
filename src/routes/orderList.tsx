import { createFileRoute } from '@tanstack/react-router';
import OrderListPage from '@/pages/Order/OrderListPage';

export const Route = createFileRoute('/orderList')({
  component: () => <OrderListPage />,
});
