import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			globals: true,
			setupFiles: ['./src/shared/mock/mswSetup.ts', './src/shared/mock/intersectionObserverMock.ts'],
		},
	}),
);
