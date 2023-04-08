import client from './client';

const fetcher = async (url: string) => {
  const response = await client.get(url);
  return response.data;
};

export default fetcher;
