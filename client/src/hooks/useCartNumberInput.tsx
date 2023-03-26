import { useState } from 'react';
const useCartNumberInput = () => {
  const [number, setNumber] = useState(1);

  // 카트에 있는 상품 개수도 업데이트
  const increaseNumber = () => {
    if (number === 20) {
      alert('더이상 증가할수 없습니다!');
      return;
    }
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    if (number === 1) {
      alert('더이상 감소할수 없습니다!');
      return;
    }
    setNumber(number - 1);
  };

  return { increaseNumber, decreaseNumber, number };
};
export default useCartNumberInput;
