import { useState, useEffect } from "react";
import { Product } from "../store/store";

export const useFetchData = (
  url: string,
  initialState: Product[],
  options = {}
) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    async function fetchProducts() {
      const products = await fetch(url);
      const data = await products.json();
      setData(
        data.map((product: Product) => ({
          ...product,
          quantity: 1,
          isChecked: false,
        }))
      );
    }
    fetchProducts();
  }, [url]);

  return data;
};
