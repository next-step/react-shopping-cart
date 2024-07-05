import { createFileRoute } from '@tanstack/react-router';
import ProductListPage from '@/pages/Product/ProductListPage';

export const Route = createFileRoute('/list')({
  component: () => <ProductListPage />,
});
