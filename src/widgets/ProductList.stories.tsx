import type { Meta, StoryObj } from '@storybook/react';

import ProductListComponent from 'src/widgets/ProductList';
import { MemoryRouterDecorator } from 'src/stories/Decorator';
import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';

const meta: Meta = {
	component: ProductListComponent,
	decorators: [MemoryRouterDecorator],
};

export default meta;

type Story = StoryObj<typeof ProductListComponent>;

export const EmptyList: Story = {
	parameters: {
		msw: {
			handlers: [getProductListMockHandler([])],
		},
	},
};

export const WithList: Story = {
	parameters: {
		msw: {
			handlers: [getProductListMockHandler()],
		},
	},
};
