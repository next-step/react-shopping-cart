import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import { useEffect } from 'react';

import RootLayout from 'src/shared/ui/RootLayout';
import OrderListComponent from 'src/widgets/OrderList';
import { getOrderListMockHandler } from 'src/entities/order/api/getOrderList.api';
import { getCartItemListMockHandler } from 'src/entities/cart/api/getCartItemList.api';
import { postCartItemMockHandler } from 'src/entities/cart/api/postCartItem.api';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';
import dbJSON from 'src/shared/mock/db.json';

const meta: Meta = {
	component: OrderListComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof OrderListComponent>;

export const EmptyOrderList: Story = {
	parameters: {
		msw: {
			handlers: [getOrderListMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				path: '/order/list',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: 'cart',
						useStoryElement: false,
						Component: () => <div>Cart</div>,
					},
					{
						path: 'order/list',
						useStoryElement: true,
					},
				],
			},
		}),
	},
};

export const WithOrderList: Story = {
	parameters: {
		msw: {
			handlers: [getOrderListMockHandler, getCartItemListMockHandler, postCartItemMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				path: '/order/list',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: 'cart',
						useStoryElement: false,
						Component: () => <div>Cart</div>,
					},
					{
						path: 'order/list',
						useStoryElement: true,
					},
					{
						path: 'order/detail/:id',
						useStoryElement: false,
						Component: () => <div>Order Detail</div>,
					},
				],
			},
		}),
	},
	render: () => {
		useEffect(() => {
			MOCK_ORDER_LIST.push(...dbJSON.orders);

			return () => {
				MOCK_ORDER_LIST.splice(0, MOCK_ORDER_LIST.length);
				MOCK_CART_LIST.splice(0, MOCK_CART_LIST.length);
			};
		}, []);

		return <OrderListComponent />;
	},
};
