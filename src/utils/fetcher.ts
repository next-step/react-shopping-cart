const fetcher = {
  get: async <T>(url: string) => {
    const response = await fetch(url);
    return response.json() as T;
  },
};

export default fetcher;
