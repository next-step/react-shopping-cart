import { useEffect, useState } from "react";
import { ProductItem } from "types/type";
import { ProductContainer } from "../style";
import Item from "./item";
import GlobalHeader from "components/header";
import Nav from "components/nav";
import { useProductList } from "hooks/product";
import { useScrollPagination } from "hooks/useScrollPagination";

const PAGE_SIZE = 10;

const ProductListPageContent = () => {
  const [page, setPage] = useState<number>(0);
  const { data, isLoading, isError } = useProductList(page, PAGE_SIZE);

  const [products, setProducts] = useState<ProductItem[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { isLoading: isScrollLoading, setIsLoading: setScrollLoading } =
    useScrollPagination({
      onLoadMore: () => {
        setPage((prevPage) => prevPage + 1);
      },
    });

  useEffect(() => {
    if (isError) {
      console.error("Error fetching product list:", isError);
      alert("Failed to load product list.");
      return;
    }

    if (data) {
      // 기존 목록에 새 제품 추가
      setProducts((prevProducts) => [...prevProducts, ...data]);

      // 가져올 제품이 더 있는지 확인
      setHasMore(data.length >= PAGE_SIZE);
    }

    setScrollLoading(false);
  }, [data, isError, setScrollLoading]);

  return (
    <ProductContainer>
      {products.map((item: ProductItem) => (
        <Item key={"item" + item.id} item={item} />
      ))}
      {(isLoading || isScrollLoading) && hasMore && <div>Loading...</div>}
    </ProductContainer>
  );
};

const ProductListPage = () => {
  return (
    <>
      <GlobalHeader />
      <Nav />
      <ProductListPageContent />
    </>
  );
};

export default ProductListPage;