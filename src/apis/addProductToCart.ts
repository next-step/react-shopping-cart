import delay from '@/utils/delay';

export default function addProductToCart(productId: number) {
  return fetch(`${import.meta.env.VITE_NEXTSTEP_API_URL}/cart/${productId}`, {
    method: 'POST',
  }).then(async (data) => {
    await delay(1000);
    return data;
  });
}
