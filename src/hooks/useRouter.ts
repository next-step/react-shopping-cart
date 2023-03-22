import { useNavigate } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();

  const confirmAndRoute = (message: string, path: string) => {
    const confirmRes = confirm(message);
    if (confirmRes) {
      navigate(path);
    }
  };

  return {
    routeTo: (path: string) => navigate(path),
    confirmAndRoute,
  };
};

export default useRouter;
