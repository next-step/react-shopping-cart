import Divider from '@components/common/Divider/Divider';
import Title from '@components/common/Title/Title';

interface CartProductsHeaderProps {
  productCount: number;
}

export default function CartProductsHeader({
  productCount,
}: CartProductsHeaderProps) {
  return (
    <>
      <Title
        as='h3'
        variant='subtitle'
        css={{
          display: 'flex',
          marginTop: '10px',
          alignItems: 'center',
        }}
      >{`든든배송 상품(${productCount}개)`}</Title>

      <Divider color='gray' />
    </>
  );
}
