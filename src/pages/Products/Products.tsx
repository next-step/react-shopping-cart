import React, { useEffect } from "react";
import { ProductItem } from "../../components/ProductItem";
import { useInfiniteQuery } from "react-query";
import { getProducts } from "../../apis/products";
import { useInView } from "react-intersection-observer";

const PAGE_UNIT = 8;
const queryFunction = ({ pageParam = 1 }) => getProducts({ page: pageParam, unit: PAGE_UNIT });

function Products() {
  const { ref, inView } = useInView({ threshold: 0 });

  const { fetchNextPage, isLoading, data, hasNextPage } = useInfiniteQuery(
    "products", //
    queryFunction, //
    {
      getNextPageParam: (lastPage) => {
        const { page: currentPage, endOfPage } = lastPage;
        return currentPage < endOfPage && parseInt(currentPage.toString(), 10) + 1;
      },
    }
  );

  useEffect(() => {
    if (inView) {
      console.log("inView!!!", hasNextPage);
    }
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  if (isLoading) {
    //TODO:나중에...
    return <div>loading</div>;
  }

  return (
    <section className="product-container">
      {data?.pages.map((page) => (
        <React.Fragment key={page.page}>
          {page.products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && <div style={{ visibility: "hidden" }} ref={ref}></div>}
    </section>
  );
}

export default Products;
