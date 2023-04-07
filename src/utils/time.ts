export function second(second: number) {
  return 1000 * second;
}

export function minute(input: number) {
  const minute = Math.floor(input);
  const secondLong = Math.floor((input - minute) * 60);

  return 1000 * 60 * minute + second(secondLong);
}

export function millisecondToSecondUnit(millisecond: number) {
  const second = (millisecond / 1000).toFixed(1);

  return `${second}s`;
}
