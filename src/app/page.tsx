import { useEffect } from "react";
import { useProducts } from "@/api";
import { Card, Loading } from "@/components";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks";

const Home = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
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
    </section>
  );
};

export default Home;
