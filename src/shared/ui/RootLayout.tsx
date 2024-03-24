import { Outlet } from 'react-router-dom';

import GNB from 'src/shared/ui/GNB';
import Alert from 'src/shared/ui/Alert';

export default function RootLayout() {
	return (
		<>
			<div className="app-container">
				<GNB />
				<Outlet />
			</div>
			<Alert />
		</>
	);
}
