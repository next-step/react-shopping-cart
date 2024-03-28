import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

import GNBComponent from 'src/shared/ui/GNB';

const meta: Meta = {
	component: GNBComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof GNBComponent>;

export const GNB: Story = {
	args: {},
	argTypes: {},
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: '/',
			},
			routing: {
				path: '/',
				useStoryElement: true,
				children: [
					{
						path: 'cart',
						Component: () => <div>Cart</div>,
					},
					{
						path: 'order/list',
						Component: () => <div>Order List</div>,
					},
				],
			},
		}),
	},
};
