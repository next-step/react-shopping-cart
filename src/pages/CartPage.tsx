import { useEffect, useState } from 'react';
import type { Cart } from 'types/api';

import { API } from 'constants/api';
import httpRequest from 'utils/http';

const CartPage = () => {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await httpRequest<Cart[]>(API.CARTS);
      setCarts(response);
    }

    fetchData();
  }, []);

  return (
    <div>
      {carts.map(({ id, product }) => (
        <div key={id}>
          <img src={product.imageUrl} alt={product.name} />
          <p key={id}>{product.name}</p>
          <p key={id}>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
