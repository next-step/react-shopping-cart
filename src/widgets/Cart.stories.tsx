import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

import RootLayout from 'src/shared/ui/RootLayout';
import CartComponent from 'src/widgets/Cart';
import { getCartItemListMockHandler } from 'src/entities/cart/api/getCartItemList.api';
import { deleteCartItemMockHandler } from 'src/entities/cart/api/deleteCartItem.api';
import { deleteCartItemListMockHandler } from 'src/entities/cart/api/deleteCartItemList.api';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';
import dbJSON from 'src/shared/mock/db.json';

const meta: Meta = {
	component: CartComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof CartComponent>;

export const EmptyCart: Story = {
	parameters: {
		msw: {
			handlers: [getCartItemListMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				path: '/cart',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: 'cart',
						useStoryElement: true,
					},
					{
						path: 'order/list',
						useStoryElement: false,
						Component: () => <div>Order List</div>,
					},
				],
			},
		}),
	},
};

export const WithCart: Story = {
	parameters: {
		msw: {
			handlers: [getCartItemListMockHandler, deleteCartItemMockHandler, deleteCartItemListMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				path: '/cart',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: 'cart',
						useStoryElement: true,
					},
					{
						path: 'order/list',
						useStoryElement: false,
						Component: () => <div>Order List</div>,
					},
					{
						path: 'order/detail/:id',
						useStoryElement: false,
						Component: () => {
							const { id } = useParams();

							return <div>Order Detail: {id}</div>;
						},
					},
				],
			},
		}),
	},
	render: () => {
		useEffect(() => {
			MOCK_CART_LIST.push(...dbJSON.carts);

			return () => {
				MOCK_CART_LIST.splice(0, MOCK_CART_LIST.length);
			};
		}, []);

		return <CartComponent />;
	},
};
