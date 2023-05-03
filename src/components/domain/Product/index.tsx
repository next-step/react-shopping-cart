/* eslint-disable no-console */
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

  const [pageNumber, setPageNumber] = useState(0);
  const [pageVisited, setPageVisited] = useState(0);
  const productsPerPage = products.slice(
    pageVisited,
    pageVisited + PRODUCTS_PER_PAGE
  );
  const [displayProducts, setDisplayProducts] = useState(productsPerPage);
  console.log(displayProducts);

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
    setDisplayProducts((prev) => {
      const newProductsPerPage = products.slice(
        pageVisited,
        pageVisited + PRODUCTS_PER_PAGE
      );
      return [...prev, ...newProductsPerPage];
    });
  }, [pageNumber]);

  return (
    <section className="product-container">
      {displayProducts.map((product, idx) => (
        <>
          <ProductInfo key={product.id} product={product} />
          {idx === displayProducts.length - 1 && (
            <div ref={lastProductElementRef}>Loader</div>
          )}
        </>
      ))}
      {loading && "Skeleton"}
      {error && "Error"}
    </section>
  );
};

export default memo(Products);

const PRODUCTS_URL = "http://localhost:3000/";
const PRODUCTS_PER_PAGE = 4;
