import axios from 'axios';

export const getOrders = async () => {
  const response = await axios.get('orders');

  return response.data;
};
