import delay from '@/utils/delay';

export default function removeProductFromCart(productId: number) {
  return fetch(`${import.meta.env.VITE_NEXTSTEP_API_URL}/cart/${productId}`, {
    method: 'DELETE',
  }).then(async (data) => {
    await delay(1000);
    return data;
  });
}
