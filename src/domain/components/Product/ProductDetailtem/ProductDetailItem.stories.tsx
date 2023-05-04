import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductDetailItem from '.';

export default {
  title: 'Domain/Product/DetailItem',
  component: ProductDetailItem,
} as ComponentMeta<typeof ProductDetailItem>;

const mockData = [
  {
    id: 1,
    name: '냉면용기(대)',
    price: 83700,
    image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  },
  {
    id: 2,
    name: '생새우살 (71/90) 500g 4개',
    price: 29000,
    image: 'https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg',
  },
  {
    id: 3,
    name: '펩시 콜라 355ml 24캔',
    price: 83700,
    image: 'https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg',
  },
];

const Template: ComponentStory<typeof ProductDetailItem> = (args) => <ProductDetailItem {...args} />;

// export const DetailItem = Template.bind({});
// DetailItem.parameters = {
//   reactRouter: {
//     routePath: '/product/:id',
//     routeParams: { id: 1 },
//   },
// };

// DetailItem.args = {
//   products: mockData,
// };
