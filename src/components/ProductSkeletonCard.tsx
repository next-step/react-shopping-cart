export default function ProductSkeletonCard() {
  return (
    <div className="bg-white p-2 shadow-lg rounded-lg overflow-hidden flex flex-col gap-4">
      <div className="h-48 bg-gray-200 animate-pulse" />
      <div>
        <div className="h-4 bg-gray-200 w-3/4 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-200 w-2/4 animate-pulse" />
      </div>
    </div>
  );
}
