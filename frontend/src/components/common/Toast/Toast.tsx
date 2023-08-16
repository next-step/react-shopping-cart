import { memo } from 'react';

import * as Styled from '@/components/common/Toast/Toast.styled';

type Props = {
  message: string;
};

function Toast({ message }: Props) {
  return <Styled.Toast>{message}</Styled.Toast>;
}

export default memo(Toast);
