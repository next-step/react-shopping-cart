import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import { useParams } from 'react-router-dom';

import ProductListComponent from 'src/widgets/ProductList';
import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';
import RootLayout from 'src/shared/ui/RootLayout';

const meta: Meta = {
	component: ProductListComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof ProductListComponent>;

export const EmptyList: Story = {
	parameters: {
		msw: {
			handlers: [getProductListMockHandler([])],
		},
		reactRouter: reactRouterParameters({
			location: {
				path: '/',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						index: true,
						useStoryElement: true,
					},
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

export const WithList: Story = {
	parameters: {
		msw: {
			handlers: [getProductListMockHandler()],
		},
		reactRouter: reactRouterParameters({
			location: {
				path: '/',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						index: true,
						useStoryElement: true,
					},
					{
						path: 'product/:id',
						Component: () => {
							const { id } = useParams();

							return <div>Id : ${id}</div>;
						},
					},
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
