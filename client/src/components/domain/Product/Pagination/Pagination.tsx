import type { PaginationProps } from './Pagination.types';
import * as Styled from './Pagination.styles';

import { usePagination } from 'hooks';
const Pagination = ({ totalPage }: PaginationProps) => {
  const { handlePageNationButton, currentPage } = usePagination();

  const paginationArray = new Array(totalPage).fill(1).map((value, idx) => idx + value);

  return (
    <Styled.PaginationList>
      {paginationArray.map((value: number) => (
        <Styled.PaginationItem
          key={value}
          onClick={() => handlePageNationButton(value)}
          isActive={value === currentPage}
        >
          {value}
        </Styled.PaginationItem>
      ))}
    </Styled.PaginationList>
  );
};

export default Pagination;
