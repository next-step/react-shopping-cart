// delay
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function getProducts() {
  return fetch('/products')
    .then((res) => res.json())
    .then(async (data) => {
      await delay(1000);
      return data;
    });
}
