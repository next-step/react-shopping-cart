import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const inserted = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Toast = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 24px;
  right: 8px;
  width: 300px;
  height: 60px;
  border: 1px solid #29c1bc;
  background-color: white;
  animation: ${inserted} 0.5s;
`;
