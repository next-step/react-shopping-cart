const pagination = <T>(data: T[], page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = page * limit;
  return data.slice(start, end);
};

export { pagination };
