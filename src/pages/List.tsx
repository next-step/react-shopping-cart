import ProductService from '../service/ProductService';
import { useEffect, useState } from 'react';
import ProductContainer from '../components/organisms/list/ProductContainer';

export default function List() {
  const { getProducts } = ProductService();
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const response = await getProducts();
    setState(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductContainer products={state}/>
  );
}
