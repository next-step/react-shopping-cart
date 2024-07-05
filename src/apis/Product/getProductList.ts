import axios from 'axios';

interface PageParam {
  limit: number;
  offset: number;
}

export const fetchProductList = async ({ offset, limit }: PageParam) => {
  const response = await axios.get('/productlist', {
    params: { offset, limit },
  });
  const products = response.data;

  return products;
};
