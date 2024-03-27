import type { Meta, StoryObj } from '@storybook/react';
import { useParams } from 'react-router-dom';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

import ProductItemComponent, { ProductItemProps } from 'src/entities/product/ui/ProductListItem';

const meta: Meta<ProductItemProps> = {
	component: ProductItemComponent,
	render: ({ name, price, imageUrl, id }) => {
		return (
			<section className="product-container">
				<ProductItemComponent name={name} price={price} imageUrl={imageUrl} id={id} />
			</section>
		);
	},
	decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof ProductItemComponent>;

export const ProductListItem: Story = {
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
	parameters: {
		reactRouterParameters: reactRouterParameters({
			location: {
				path: '/',
			},
			routing: {
				path: '/',
				useStoryElement: true,
				children: [
					{
						path: 'product/:id',
						Component: () => {
							const { id } = useParams();

							return <div>Id : ${id}</div>;
						},
					},
				],
			},
		}),
	},
};
