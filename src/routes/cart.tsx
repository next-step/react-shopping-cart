import { createFileRoute } from '@tanstack/react-router';
import CartPage from '@/pages/Cart/CartPage';

export const Route = createFileRoute('/cart')({
  component: () => <CartPage />,
});
