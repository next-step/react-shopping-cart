import { ReactNode } from 'react';
import { render, renderHook } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { InitialEntry } from 'history';

import routes from 'src/routes/Router';

interface RenderWithMemoryRouterOptions {
	initialEntries?: InitialEntry[];
	initialIndex?: number;
}

function QueryClientWrapper({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient();
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export function renderMemoryRouter(options?: RenderWithMemoryRouterOptions) {
	const memoryRouter = createMemoryRouter(routes, { ...options });
	const alert = document.createElement('div');

	alert.id = 'alert';

	return render(<RouterProvider router={memoryRouter} />, {
		wrapper: QueryClientWrapper,
		container: document.body.appendChild(alert),
	});
}

export function renderHookWithQueryClient<Result, Props>(callback: (initialProps: Props) => Result) {
	return renderHook(callback, { wrapper: QueryClientWrapper });
}
