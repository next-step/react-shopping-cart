export const fetchProducts = async (url: string, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Fetch failed with status ${response.status}`);
  }

  return response.json();
};
