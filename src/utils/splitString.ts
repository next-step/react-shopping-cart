export const splitString = (str: string, length: number) =>
  [...str].reduce<string[]>((acc, _, index, arr) => {
    if (index % length === 0) {
      acc.push(arr.slice(index, index + length).join(''));
    }
    return acc;
  }, []);
