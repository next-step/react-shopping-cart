import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, expect, within } from '@storybook/test';

import ProductItemComponent, { ProductItemProps } from 'src/entities/product/ui/ProductListItem';

const meta: Meta<ProductItemProps> = {
	component: ProductItemComponent,
	render: ({ onClickCart, name, price, imageUrl, id }) => {
		return (
			<section className="product-container">
				<ProductItemComponent onClickCart={onClickCart} name={name} price={price} imageUrl={imageUrl} id={id} />
			</section>
		);
	},
};

export default meta;

type Story = StoryObj<typeof ProductItemComponent>;

export const ProductItem: Story = {
	args: {
		id: 1,
		name: '냉면용기(대)',
		price: 83700,
		imageUrl: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
		onClickCart: fn(),
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

		const productCartButton = canvas.getByTestId(`product-cart-button-${args.id}`);

		await userEvent.click(productCartButton);

		await expect(args.onClickCart).toHaveBeenCalled();
	},
};
