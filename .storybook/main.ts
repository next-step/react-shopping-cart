import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-actions',
		'storybook-addon-remix-react-router',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	viteFinal: config => {
		config.resolve = {
			...config.resolve,
			alias: {
				...config.resolve?.alias,
				path: require.resolve('path-browserify'),
			},
		};

		return config;
	},
};
export default config;
