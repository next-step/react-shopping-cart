import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import 'src/css/index.css';
import Router from 'src/routes/Router';

const queryClient = new QueryClient();

async function enableMocking() {
	if (!import.meta.env.DEV) {
		return;
	}

	const mswWorker = await import('src/shared/lib/mswWorker');

	return mswWorker.default.start();
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</React.StrictMode>,
	);
});
