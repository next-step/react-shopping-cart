import type { PaginationProps } from './Pagination.types';
import * as Styled from './Pagination.styles';

import { usePagination } from 'hooks';
const Pagination = ({ totalPage }: PaginationProps) => {
  const { navigateToPage } = usePagination();

  const paginationArray = new Array(totalPage).fill(1).map((value, idx) => idx + value);

  return (
    <Styled.PaginationList>
      {paginationArray.map((value: number) => (
        <Styled.PaginationItem key={value} onClick={() => navigateToPage(value)}>
          {value}
        </Styled.PaginationItem>
      ))}
    </Styled.PaginationList>
  );
};

export default Pagination;
