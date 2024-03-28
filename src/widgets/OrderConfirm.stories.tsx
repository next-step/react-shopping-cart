import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import { useEffect } from 'react';

import RootLayout from 'src/shared/ui/RootLayout';
import OrderConfirmComponent from 'src/widgets/OrderConfirm';
import { getOrderDetailMockHandler } from 'src/entities/order/api/getOrderDetail.api';
import { putOrderIsPaidMockHandler } from 'src/entities/order/api/putOrderIsPaid.api';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import dbJSON from 'src/shared/mock/db.json';

const meta: Meta = {
	component: OrderConfirmComponent,
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof OrderConfirmComponent>;

export const OrderConfirm: Story = {
	parameters: {
		msw: {
			handlers: [getOrderDetailMockHandler, putOrderIsPaidMockHandler],
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { id: 1 },
				path: '/order/confirm/:id',
			},
			routing: {
				path: '/',
				element: <RootLayout />,
				children: [
					{
						path: 'order/confirm/:id',
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
			};
		});

		return <OrderConfirmComponent />;
	},
};
