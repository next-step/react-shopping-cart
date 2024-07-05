import axios from 'axios';

interface cursorParam {
  limit: number;
  cursor: number;
}

export const fetchProducts = async ({ cursor, limit }: cursorParam) => {
  const response = await axios.get('/products', {
    params: { cursor, limit },
  });
  const products = response.data;

  return products;
};
