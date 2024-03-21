import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, expect, within } from '@storybook/test';

import ProductDetailItemComponent, { ProductDetailItemProps } from 'src/entities/product/ui/ProductDetailItem';

const meta: Meta<ProductDetailItemProps> = {
	component: ProductDetailItemComponent,
	render: ({ onClickCartButton, name, price, imageUrl, id }) => {
		return (
			<ProductDetailItemComponent
				onClickCartButton={onClickCartButton}
				name={name}
				price={price}
				imageUrl={imageUrl}
				id={id}
			/>
		);
	},
};

export default meta;

type Story = StoryObj<typeof ProductDetailItemComponent>;

export const ProductDetailItem: Story = {
	args: {
		id: 1,
		name: '냉면용기(대)',
		price: 83700,
		imageUrl: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
		onClickCartButton: fn(),
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
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const productCartButton = canvas.getByTestId('product-detail-button');

		await userEvent.click(productCartButton);

		await expect(args.onClickCartButton).toHaveBeenCalled();
	},
};
