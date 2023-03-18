export const getAllProducts = async () : Promise<Product[]> => {
  const data = await fetch('/product/list');
  return data.json();
};
