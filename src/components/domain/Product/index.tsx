import React, {
  MutableRefObject,
  memo,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useFetchData } from "../../../hooks/useFetchData";
import { useAppSelector } from "../../../hooks/storeHooks";

const Products = () => {
  const globalProduct = useAppSelector((state) => state.cart.products);
  const {
    data: products,
    loading,
    error,
    hasMore,
  } = useFetchData(PRODUCTS_URL, globalProduct);

  const PRODUCTS_PER_PAGE = 4;
  const [pageNumber, setPageNumber] = useState(0);
  const [pageVisited, setPageVisited] = useState(0);

  const fourProducts = products.slice(
    pageVisited,
    pageVisited + PRODUCTS_PER_PAGE
  );
  const [displayProducts, setDisplayProducts] = useState(fourProducts);

  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);
  const lastProductElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting && hasMore) {
            setPageNumber((prev) => prev + 1);
          }
        },
        {
          threshold: 0.25,
        }
      );
      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );

  useEffect(() => {
    setPageVisited(pageNumber * PRODUCTS_PER_PAGE);
    setDisplayProducts((prev) => [...prev, ...fourProducts]);
  }, [pageNumber]);

  return (
    <section className="product-container">
      {displayProducts.map((product) => (
        <ProductInfo key={product.id} product={product} />
      ))}
      {loading && "Skeleton"}
      {error && "Error"}
      <div ref={lastProductElementRef}>Loader</div>
    </section>
  );
};

export default memo(Products);

const PRODUCTS_URL = "http://localhost:3000/";
