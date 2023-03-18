import { useContext } from 'react';
import { CardContext } from '../index';

export default function useCardState() {
  return useContext(CardContext);
}
