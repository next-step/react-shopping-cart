import styled, { css } from 'styled-components';
import Button from '../Button';
import type { PaginationItemProps } from './Pagination.types';
export const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px;
`;

export const PaginationItem = styled(Button)<PaginationItemProps>`
  cursor: pointer;
  font-size: 32px;
  padding: 10px;
  border-radius: 5px;
  ${({ isActive }) =>
    isActive === false
      ? css`
          opacity: 0.3;
        `
      : css`
          opacity: 1;
        `}
`;
