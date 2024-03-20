export const formatPriceToKRW = (price: number): string => {
	return new Intl.NumberFormat('ko-KR').format(price) + '원';
};
