import { IProduct } from "../../../domain/shopping-cart/types";
import { useInfiniteQuery, useQuery } from "react-query";
import { getProducts } from "../../../apis/products";

type THookProductsProps = {
  // setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

const useProducts = (props: THookProductsProps) => {
  // const queryClient = useQueryClient();
  // return { products };
};

export default useProducts;
