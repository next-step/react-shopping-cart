import { useNavigate, useSearchParams } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const confirmAndRoute = (message: string, path: string) => {
    const confirmRes = confirm(message);
    if (confirmRes) {
      navigate(path);
    }
  };

  const getLocationQuery = (queryKey: string) => {
    return searchParams.get(queryKey);
  };

  return {
    routeTo: (path: string) => navigate(path),
    confirmAndRoute,
    getLocationQuery,
  };
};

export default useRouter;
