import delay from '@/utils/delay';

export default function getProducts() {
  return fetch(`${import.meta.env.VITE_NEXTSTEP_API_URL}/products`)
    .then((res) => res.json())
    .then(async (data) => {
      await delay(1000);
      return data;
    });
}
