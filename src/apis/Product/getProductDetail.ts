import axios from 'axios';

export const getProductDetail = async (id: number) => {
  const response = await axios.get(`/products/${id}`);

  return response.data;
};
