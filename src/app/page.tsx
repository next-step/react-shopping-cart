import { useEffect } from "react";
import { useProducts } from "@/api";
import { Card, Loading } from "@/components";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks";
import Spinner from "@/assets/spinner.svg?react";

const Home = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetching } =
    useProducts();
  const { ref, isIntersecting } = useIntersectionObserver();

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
    <section className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
      <h2 className="sr-only">상품 목록</h2>
      {data?.pages.flat().map(({ id, ...props }) => (
        <Link key={id} to={`/${id}`}>
          <Card id={id} {...props} />
        </Link>
      ))}
      <div ref={ref} />
      {isFetching && (
        <div className="col-span-2 md:col-span-4 col-start-1 flex justify-center">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default Home;
