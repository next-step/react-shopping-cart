import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { ToastContext } from '@/context/toast/ToastProvider';

import { assert } from '@/utils/validation';

export default function useToastContext() {
  const toastContext = useContext(ToastContext);

  assert(toastContext != null, ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);

  return toastContext;
}
