export const getJSONData = (key: string) => {
  const data = localStorage.getItem(key);
  // if (!data) throw new Error(`Could not find data of ${key}`);
  return data ? JSON.parse(data) : [];
};

export const setJSONData = (key: string, value: any): void => {
  JSON.stringify(value);
  localStorage.setItem(key, JSON.stringify(value));
};

export const reset = () => {
  localStorage.clear();
};
