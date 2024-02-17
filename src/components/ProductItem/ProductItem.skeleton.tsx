import { Box, Skeleton } from 'components/@common';

const ProductItemSkeleton = () => {
  return (
    <Box display="grid" gap={8}>
      <Skeleton width="100%" height={300} variant="rounded" />
      <Skeleton width="100%" height={20} />
      <Skeleton width="100%" height={25} />
    </Box>
  );
};

export default ProductItemSkeleton;
