import type { Meta, StoryObj } from '@storybook/react';

import ProductDetailItemComponent, { ProductDetailItemProps } from 'src/entities/product/ui/ProductDetailItem';

const meta: Meta<ProductDetailItemProps> = {
	component: ProductDetailItemComponent,
	render: ({ name, price, imageUrl, id }) => {
		return <ProductDetailItemComponent name={name} price={price} imageUrl={imageUrl} id={id} />;
	},
};

export default meta;

type Story = StoryObj<typeof ProductDetailItemComponent>;

export const ProductDetailItem: Story = {
	args: {
		id: '1',
		name: '냉면용기(대)',
		price: 83700,
		imageUrl: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
	},
	argTypes: {
		name: {
			control: {
				type: 'text',
			},
		},
		price: {
			control: {
				type: 'number',
				min: 0,
			},
		},
		imageUrl: {
			control: {
				type: 'text',
			},
		},
	},
};
