import { Skeleton } from '@/common/components/Skeleton/Skeleton'

export const ProductSkeleton = () => {
  return (
    <div className="flex justify-center w-full" style={{ marginTop: '50px' }}>
      <div
        style={{
          width: '480px',
        }}
      >
        <Skeleton />
      </div>
    </div>
  )
}
