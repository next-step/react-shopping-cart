import { ReactNode } from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const MemoryRouterDecorator = (Story: () => ReactNode) => {
	return (
		<MemoryRouter>
			<Routes>
				<Route path="/*" element={<Story />} />
			</Routes>
		</MemoryRouter>
	);
};

export { MemoryRouterDecorator };
