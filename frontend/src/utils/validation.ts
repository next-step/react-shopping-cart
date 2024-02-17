export const assert = (predicate: boolean, message: string): void => {
  if (!predicate) {
    throw new Error(message);
  }
};
