import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from 'src/routes/Router';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={createBrowserRouter(routes)} />
		</QueryClientProvider>
	);
}
