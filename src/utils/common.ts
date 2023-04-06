export const isEmpty = (value: any): boolean => {
  if (typeof value === 'string') return value === '';
  if (value instanceof Array) return value.length <= 0;
  if (value instanceof Object) return Object.keys(value).length === 0;
  throw new Error('Not allow type');
};
