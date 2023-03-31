import { ProductItem } from '../components';
import styled from '@emotion/styled';
import { mediaQuery } from '../../../utils';
import { PaginationInfoType, ProductDataType } from '../../../types';
import Pagination from '../../../components/pagination/Pagination';

const S = {
  Content: styled.div(
    mediaQuery({
      margin: ['50px 0', '60px 0'],
    })
  ),
  ProductList: styled.div(
    mediaQuery({
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, minmax(0, 1fr))',
        'repeat(2, minmax(0, 1fr))',
        'repeat(4, minmax(0, 1fr))',
      ],
      columnGap: ['0', '20px', '40px'],
      rowGap: ['20px', '20px', '30px'],
      marginBottom: ['20px', '30px'],
    })
  ),
};

interface ProductListProps {
  products: ProductDataType[];
  navigateToDetailedPage: (num?: number) => void;
  addCart: (item: ProductDataType) => void;
  pagination: PaginationInfoType;
}

const ProductList = ({
  products,
  navigateToDetailedPage,
  addCart,
  pagination,
}: ProductListProps) => {
  return (
    <S.Content>
      <S.ProductList>
        {products?.map((item) => (
          <ProductItem
            key={item.id}
            {...item}
            onClickProductImage={() => navigateToDetailedPage(item.id)}
            onClickAddCart={() => addCart(item)}
          />
        ))}
      </S.ProductList>
      <Pagination {...pagination} />
    </S.Content>
  );
};

export default ProductList;
