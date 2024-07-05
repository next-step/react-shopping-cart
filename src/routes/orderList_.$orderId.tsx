import { createFileRoute } from '@tanstack/react-router';
import OrderDetailPage from '@/pages/Order/OrderDetailPage';

export const Route = createFileRoute('/orderList/$orderId')({
  component: () => <OrderDetailPage />,
});
