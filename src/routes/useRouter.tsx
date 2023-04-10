import { useCallback } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import type * as Route from '@/routes/Route';

export const useRouter = () => {
  const navigate = useNavigate();

  const back = useCallback(
    (delta = -1) => {
      navigate(delta);
    },
    [navigate]
  );

  const go = useCallback(
    (path: Route.RoutePath, option?: Partial<{ search: any; state: any }>) => {
      navigate(
        {
          pathname: path,
          /**
           * {@see https://github.com/remix-run/react-router/issues/7743}
           */
          search: option
            ? createSearchParams({
              ...option?.search,
            }).toString()
            : '',
        },
        {
          state: { ...option?.state },
        }
      );
    },
    [navigate]
  );

  return {
    back,
    go,
  };
};
