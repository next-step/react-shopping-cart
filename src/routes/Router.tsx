import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from 'src/shared/ui/RootLayout';

import ProductList from 'src/widgets/ProductList';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <ProductList />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
