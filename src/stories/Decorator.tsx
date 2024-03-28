import { ReactNode } from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import GNB from 'src/shared/ui/GNB';

const MemoryRouterDecorator = (Story: () => ReactNode) => {
	return (
		<MemoryRouter>
			<Routes>
				<Route
					path="/*"
					element={
						<div>
							<GNB />
							<Story />
						</div>
					}
				/>
			</Routes>
		</MemoryRouter>
	);
};

export { MemoryRouterDecorator };
