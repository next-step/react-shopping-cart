function second(second: number) {
  return 1000 * second;
}

export function minute(input: number) {
  const minute = Math.floor(input);
  const secondLong = Math.floor((input - minute) * 60);

  return 1000 * 60 * minute + second(secondLong);
}
