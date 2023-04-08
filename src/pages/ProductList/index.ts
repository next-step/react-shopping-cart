import { lazy } from 'react';

// export { default as ProductListPage } from './ProductListPage';

export const ProductListPage = lazy(() => import('./ProductListPage'));
