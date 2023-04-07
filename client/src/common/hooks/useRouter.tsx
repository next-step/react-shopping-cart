import { useNavigate } from 'react-router-dom';

type RoutePath = '/order' | '/orders' | '/products' | '/carts';

const useRouter = () => {
  const navigate = useNavigate();

  const back = (step = 1) => {
    navigate(-step);
  };

  const push = (path: RoutePath) => {
    navigate(path);
  };

  return { back, push };
};

export default useRouter;
