import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

const useRouter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const routeTo = (path: string) => navigate(path);

  const confirmAndRoute = (message: string, path: string) => {
    const confirmRes = confirm(message);
    if (confirmRes) {
      navigate(path);
    }
  };

  const getLocationQuery = useCallback(
    (queryKey: string) => {
      return searchParams.get(queryKey);
    },
    [location]
  );

  const navigateToPage = useCallback((page: number) => {
    routeTo(`${location.pathname}?page=${page}`);
  }, []);

  return {
    routeTo,
    confirmAndRoute,
    getLocationQuery,
    navigateToPage,
  };
};

export default useRouter;
