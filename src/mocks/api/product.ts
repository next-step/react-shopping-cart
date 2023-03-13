export const getProducts = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  return data;
};
