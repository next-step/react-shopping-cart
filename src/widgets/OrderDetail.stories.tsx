import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import { useEffect } from 'react';

import RootLayout from 'src/shared/ui/RootLayout';
import OrderDetailComponent from 'src/widgets/OrderDetail';
import { getOrderDetailMockHandler } from 'src/entities/order/api/getOrderDetail.api';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import dbJSON from 'src/shared/mock/db.json';
import { getCartItemListMockHandler } from 'src/entities/cart/api/getCartItemList.api';
import { postCartItemMockHandler } from 'src/entities/cart/api/postCartItem.api';

const meta: Meta = {
	component: OrderDetailComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof OrderDetailComponent>;

export const OrderDetail: Story = {
	parameters: {
		msw: {
			handlers: [getOrderDetailMockHandler, getCartItemListMockHandler, postCartItemMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { id: 1 },
				path: '/order/1',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: '/order/:id',
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
	render: () => {
		useEffect(() => {
			MOCK_ORDER_LIST.push(...dbJSON.orders);

			return () => {
				MOCK_ORDER_LIST.splice(0, MOCK_ORDER_LIST.length);
				MOCK_CART_LIST.splice(0, MOCK_CART_LIST.length);
			};
		}, []);

		return <OrderDetailComponent />;
	},
};
