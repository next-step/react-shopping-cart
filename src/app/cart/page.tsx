import Spinner from "@/assets/spinner.svg?react";
import { useEffect } from "react";
import { useCarts } from "@/api";
import { useIntersectionObserver } from "@/hooks";
import { Loading, Checkbox, Footer, Button } from "@/components";

function TotalPrice() {
  return (
    <article className="flex flex-col w-full md:p-0 px-2 py-4">
      <h3 className="border-b w-full">결제예상금액</h3>
      <div className="flex justify-between">
        <div className="underline decoration-primary-400 decoration-4 underline-offset-[-2px]">
          총 상품금액
        </div>
        <div className="underline decoration-primary-400 decoration-4 underline-offset-[-2px]">
          0원
        </div>
      </div>
      <div>
        <Button type="primary" block>
          주문하기
        </Button>
      </div>
    </article>
  );
}
const Cart = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetching } =
    useCarts();
  const { ref, isIntersecting } = useIntersectionObserver();
  // const { mutate: deleteCartItem } = useDeleteCartItem();

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <section className="pb-[73px] md:pb-0">
      <h2 className="border-b-2 border-secondary-700 text-center text-xl pb-2">
        장바구니
      </h2>
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <div className="flex gap-4 items-center">
            <Checkbox id="all" />
            <label htmlFor="all">선택 해제</label>
          </div>
          <ol className="flex flex-col divide-y">
            {data?.pages.flat().map(({ id, product }) => (
              <li key={id}>
                <div className="flex gap-3">
                  <Checkbox id={`${id}`} />
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="aspect-square w-36"
                  />
                  <div>{product.name}</div>
                  <div className="flex flex-col justify-between ml-auto">
                    <button
                      onClick={() => {
                        // deleteCartItem(id);
                      }}
                    >
                      삭제
                    </button>
                    <input type="number" value={1} />
                    <div>{product.price.toLocaleString("ko-KR")}원</div>
                  </div>
                </div>
              </li>
            ))}
            <div ref={ref} />
            {isFetching && <Spinner />}
          </ol>
        </div>
        <div className="hidden md:flex h-max">
          <TotalPrice />
        </div>
      </div>
      <Footer className="md:hidden">
        <TotalPrice />
      </Footer>
    </section>
  );
};

export default Cart;
