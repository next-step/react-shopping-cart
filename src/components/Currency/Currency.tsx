import React from 'react';

import { formatToCurrencyNumber } from '@/utils';

const currencyMap = {
  ko: {
    divideCount: 3,
    unitExpression: '원',
    divideBy: ',',
  },
} as const;

interface CurrencyProps {
  price: number;
  country?: keyof typeof currencyMap;
  className?: string;
}

export function Currency({ price, className, country = 'ko' }: CurrencyProps) {
  const currency = currencyMap[country];

  return (
    <span className={className}>{`${formatToCurrencyNumber(price, currency.divideCount, currency.divideBy)} ${
      currency.unitExpression
    }`}</span>
  );
}
