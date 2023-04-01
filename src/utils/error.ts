const countOverError = (total: number) => {
  if (total >= 20) {
    throw Error('수량은 20이상 증가 불가능합니다!');
  }
};
const countBelowError = (total: number) => {
  if (total <= 1) {
    throw Error('수량은 1이하로 감소 불가능합니다!');
  }
};
export const countError = (total: number, type: 'UP' | 'DOWN') => {
  if (type === 'UP') countOverError(total);
  if (type === 'DOWN') countBelowError(total);
};
