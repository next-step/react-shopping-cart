import { PaginationInfoType } from '../../types';
import styled from '@emotion/styled';
import { COLORS } from '../../constant';
import usePagination from '../../hooks/usePagination';

const S = {
  PaginationList: styled.ul`
    display: flex;
    align-items: center;
  `,
  PaginationItem: styled.li<{ isCurrent: boolean }>`
    padding: 0 10px;
    cursor: pointer;
    color: ${(props) => (props.isCurrent ? COLORS.PRIMARY : COLORS.BLACK)};
    &:hover {
      color: ${COLORS.PRIMARY};
    }
  `,
};

const Pagination = ({ totalPage, currentPage }: PaginationInfoType) => {
  const { navigateToPage } = usePagination();

  const paginationArray = Array(totalPage)
    .fill(1)
    .map((n, idx) => n + idx);

  return (
    <S.PaginationList>
      {paginationArray.map((pageIdx: number) => (
        <S.PaginationItem
          key={pageIdx}
          isCurrent={currentPage === pageIdx}
          onClick={() => navigateToPage(pageIdx)}
        >
          {pageIdx}
        </S.PaginationItem>
      ))}
    </S.PaginationList>
  );
};

export default Pagination;
