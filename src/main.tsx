import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/css/index.css';
import App from 'src/app';
import httpHandlers from 'src/shared/lib/mswWorker';

async function enableMocking() {
	if (import.meta.env.MODE === 'production') {
		return;
	}

	const { setupWorker } = await import('msw/browser');

	return setupWorker(...httpHandlers).start({
		onUnhandledRequest: 'bypass',
	});
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
});
