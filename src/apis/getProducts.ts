import delay from '@/utils/delay';

/* DEV: skeleton ui 테스트를 위해 delay 함수를 사용하여 1초 뒤에 데이터를 반환하도록 설정 */

export default function getProducts() {
  return fetch(`${import.meta.env.VITE_NEXTSTEP_API_URL}/products`)
    .then((res) => res.json())
    .then(async (data) => {
      await delay(1000);
      return data;
    });
}
