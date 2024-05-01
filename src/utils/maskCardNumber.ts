import { splitString } from '@/utils/splitString.ts';

export const maskCardNumber = (cardNumber: string) => {
  const splitCardNumber = splitString(cardNumber, 4);

  return splitCardNumber.map((numberModule, index) => (index === 2 || index === 3 ? '****' : numberModule)).join('-');
};
