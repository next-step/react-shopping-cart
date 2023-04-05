import { useNavigate, useSearchParams } from 'react-router-dom';

type RoutePath = '/order' | '/orders' | '/products' | '/carts' | string;

const useRouter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const back = (step = 1) => {
    navigate(-step);
  };

  const push = (path: RoutePath) => {
    navigate(path);
  };
  const getLocationQuery = (query: string) => {
    return searchParams.get(query);
  };
  return { back, push, getLocationQuery };
};

export default useRouter;
