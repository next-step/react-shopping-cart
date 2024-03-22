import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from 'src/shared/ui/RootLayout';

import ProductList from 'src/widgets/ProductList';
import ProductDetail from 'src/widgets/ProductDetail';
import Cart from 'src/widgets/Cart';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <ProductList />,
			},
			{
				path: 'product/:id',
				element: <ProductDetail />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
