import { useState, useEffect } from "react";
import type { Product } from "../store/cartSlice";

export const useFetchData = (
  url: string,
  initialState: Product[],
  options = {}
) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        res.map((product: Product) => ({
          ...product,
          quantity: 1,
          isChecked: false,
        }))
      )
      .then((res) => {
        setData(res);
        setHasMore(res.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { data, loading, error, hasMore };
};
