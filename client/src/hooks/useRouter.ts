import { useCallback } from 'react';
import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';

import { PATHS } from 'constants/router';

type Paths = typeof PATHS[keyof typeof PATHS];

const useRouter = <T>() => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as T;

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const go = useCallback(
    (to: Paths | string, options?: NavigateOptions) => {
      navigate(to, options);
    },
    [navigate]
  );

  const replace = useCallback(
    (to: Paths | string, options?: NavigateOptions) => {
      navigate(to, { replace: true, ...options });
    },
    [navigate]
  );

  return {
    navigate,
    locationState,
    goBack,
    go,
    replace,
  };
};

export default useRouter;
