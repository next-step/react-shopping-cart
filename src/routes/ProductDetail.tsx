import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import Product from "../components/detail/Product";
import { Cart } from "../types/cart";
import { Product as ProductType } from "../types/product";
import { api } from "../utils/api";
import { formatPrice } from "../utils/common";

interface RouteParams {
  id: string;
}

interface RouteState {
  product: ProductType;
}

function Detail() {
  const { id } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    if (state && String(state.product.id) === id) {
      setProduct(state.product);

      return;
    }

    (async () => {
      try {
        const product = await api.get<ProductType>(`/products/${id}`);
        setProduct(product);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [state, id]);

  const handleCartClick = async () => {
    const cart = {
      name: "dd",
      price: 3000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
    };
    await api.post<string, Cart[]>("/carts", JSON.stringify(cart));
    console.log(await api.get("/carts"));
  };

  return (
    <Container>
      <Box>
        <Img src={product?.imageUrl} alt={product?.name} />
        <Info>
          <Product product={product} />
        </Info>
        <Button onClick={handleCartClick}>장바구니</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520;
`;

const Img = styled.img`
  width: 480px;
  height: 480px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 24px;
  background: #73675c;
  font-size: 24px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default Detail;
