import { EffectCallback, useEffect } from 'react';

export default function useOnMounted(effect: EffectCallback) {
  useEffect(effect, []);
}
