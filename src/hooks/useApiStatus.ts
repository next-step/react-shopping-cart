import { useMemo, useState } from "react";

export type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

export type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

const updateStatus = (status: ApiStatus): Statuses => ({
  isIdle: status === "IDLE",
  isPending: status === "PENDING",
  isSuccess: status === "SUCCESS",
  isError: status === "ERROR",
});

const useApiStatus = (currentApiStatus: ApiStatus = "IDLE") => {
  const [apiStatus, setApiStatus] = useState(currentApiStatus);

  const statuses = useMemo(() => updateStatus(apiStatus), [apiStatus]);

  return {
    apiStatus,
    setApiStatus,
    ...statuses,
  };
};

export default useApiStatus;
