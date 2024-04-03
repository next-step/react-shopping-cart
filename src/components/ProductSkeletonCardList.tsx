import ProductSkeletonCard from './ProductSkeletonCard';

export default function ProductSkeletonCardList() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductSkeletonCard key={index} />
      ))}
    </>
  );
}
