import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from 'src/shared/ui/RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <div>Product list</div>,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
