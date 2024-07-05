export const formatToKRW = (amount: number) => {
  return amount?.toLocaleString('ko-KR') + '원';
};
