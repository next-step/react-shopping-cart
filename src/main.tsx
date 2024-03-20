import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from 'src/routes/Router';

import 'src/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
);
