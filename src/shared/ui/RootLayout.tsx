import { Outlet } from 'react-router-dom';

import GNB from 'src/shared/ui/GNB';

export default function RootLayout() {
	return (
		<div>
			<GNB />
			<Outlet />
		</div>
	);
}
