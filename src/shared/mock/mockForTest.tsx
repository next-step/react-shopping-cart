import { render, renderHook } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createMemoryRouter, RouterProvider, MemoryRouter } from 'react-router-dom';
import { InitialEntry } from 'history';

import routes from 'src/routes/Router';

interface RenderWithMemoryRouterOptions {
	initialEntries?: InitialEntry[];
	initialIndex?: number;
}

export function renderMemoryRouter(options?: RenderWithMemoryRouterOptions) {
	const queryClient = new QueryClient();
	const memoryRouter = createMemoryRouter(routes, { ...options });
	return render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={memoryRouter} />
		</QueryClientProvider>,
	);
}

export function renderHookWithMemoryRouter<Result, Props>(callback: (initialProps: Props) => Result) {
	return renderHook(callback, { wrapper: MemoryRouter });
}
