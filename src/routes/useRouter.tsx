import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type * as Route from '@/routes/Route';

export const useRouter = () => {
  const navigate = useNavigate();

  const back = useCallback((delta = -1) => {
    navigate(delta);
  }, [navigate]);

  const go = useCallback(
    (path: Route.RoutePath) => {
      navigate({ pathname: path });
    },
    [navigate]
  );

  return {
    back,
    go,
  };
};
