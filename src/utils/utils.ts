export function formatToCurrencyNumber(number: number | string, divideCount: number, divideWord: string) {
  const arrayNumber = String(number).split('');

  let count = 0;
  for (let i = arrayNumber.length - 1; i >= 0; i -= 1) {
    if (count === divideCount) {
      arrayNumber.splice(i + 1, 0, divideWord);
      count = 0;
      continue;
    }

    count += 1;
  }

  return arrayNumber.join('');
}

export function isNil<T>(param: T) {
  return typeof param === 'undefined' || param === null;
}
