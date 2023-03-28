import { PaginationInfoType } from '../../types';
import styled from '@emotion/styled';
import { COLORS } from '../../constant';
import { useRouter } from '../../hooks';

const S = {
  Ul: styled.ul`
    display: flex;
    align-items: center;
  `,
  Li: styled.li<{ isCurrent: boolean }>`
    padding: 0 10px;
    cursor: pointer;
    color: ${(props) => (props.isCurrent ? COLORS.PRIMARY : COLORS.BLACK)};
    &:hover {
      color: ${COLORS.PRIMARY};
    }
  `,
};

const Pagination = ({ totalPage, currentPage }: PaginationInfoType) => {
  const { navigateToPage } = useRouter();

  const paginationArray = Array(totalPage)
    .fill(1)
    .map((n, idx) => n + idx);

  return (
    <S.Ul>
      {paginationArray.map((pageIdx: number) => (
        <S.Li
          key={pageIdx}
          isCurrent={currentPage === pageIdx}
          onClick={() => navigateToPage(pageIdx)}
        >
          {pageIdx}
        </S.Li>
      ))}
    </S.Ul>
  );
};

export default Pagination;
