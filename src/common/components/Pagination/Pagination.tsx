import type { PaginationProps } from './Pagination.types';
import * as Styled from './Pagination.styles';

import { usePagination } from 'common/hooks';
const Pagination = ({ totalPage }: PaginationProps) => {
  const { handlePageNationButton, selectedProductPage } = usePagination();

  const paginationArray = new Array(totalPage).fill(1).map((value, idx) => idx + value);

  return (
    <Styled.PaginationList>
      {paginationArray.map((value: number) => (
        <Styled.PaginationItem
          key={value}
          onClick={() => handlePageNationButton(value)}
          isActive={value === selectedProductPage}
        >
          {value}
        </Styled.PaginationItem>
      ))}
    </Styled.PaginationList>
  );
};

export default Pagination;
