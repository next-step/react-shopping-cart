import { useCardInfo } from 'myfirstpackage-payments';
import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_CARD_STATE_KEY } from '@/constants';
import { CardState } from '@/types';
import { localStorageUtil } from '@/utils';

type CardLocalStorage = {
  [cardNumber: string]: CardState;
};

export const useCardState = () => {
  const { cardInfo } = useCardInfo();
  const [cardStates, setCardStates] = useState<CardLocalStorage>({});
  const ownerCards = Object.values(cardStates).sort((a, b) => b.timestamp - a.timestamp);

  useEffect(() => {
    const storedCardStates = localStorageUtil.getItem<CardLocalStorage>(LOCAL_STORAGE_CARD_STATE_KEY) || {};
    setCardStates(storedCardStates);
  }, []);

  useEffect(() => {
    if (cardInfo.cardNo) {
      const { cardNumber, cardType, month, name, year } = cardInfo;
      const newCardState: CardState = {
        cardNumber: `${cardNumber.first}${cardNumber.second}${cardNumber.third}${cardNumber.fourth}`,
        cardBrandName: cardType.name ?? '',
        cardColor: cardType.theme ?? '',
        month,
        year,
        name,
        timestamp: Date.now(),
      };
      setCardStates((prevCardStates) => {
        const updatedCardStates = { ...prevCardStates, [newCardState.cardNumber]: newCardState };
        localStorageUtil.setItem<CardLocalStorage>(LOCAL_STORAGE_CARD_STATE_KEY, updatedCardStates);
        return updatedCardStates;
      });
    }
  }, [cardInfo]);

  return ownerCards;
};
