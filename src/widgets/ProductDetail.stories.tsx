import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

import ProductDetailComponent from 'src/widgets/ProductDetail';
import { getProductDetailMockHandler } from 'src/entities/product/api/getProductDetail.api';
import RootLayout from 'src/shared/ui/RootLayout';

const meta: Meta = {
	component: ProductDetailComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof ProductDetailComponent>;

export const ProductDetail: Story = {
	args: {},
	argTypes: {},
	parameters: {
		msw: {
			handlers: [getProductDetailMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { id: 1 },
				path: '/product/1',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: '/product/:id',
						useStoryElement: true,
					},
					{
						path: 'cart',
						Component: () => <div>Cart</div>,
					},
				],
			},
		}),
	},
};
