import { Props } from '@/components/common/Toast/Toast.types';

import * as Styled from '@/components/common/Toast/Toast.styled';

export default function Toast({ message }: Props) {
  return <Styled.Toast>{message}</Styled.Toast>;
}
