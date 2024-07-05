import { useEffect } from 'react';
import { UseQueryResult } from '@tanstack/react-query';

const mergeClientAndServerData = <T>(
  clientData: T[],
  serverData: T[],
  getKey: (data: T) => string | number
): T[] => {
  const clientDataMap = new Map(clientData.map((item) => [getKey(item), item]));

  const mergedData =
    serverData.length > 0
      ? serverData.reduce<T[]>((merged, serverItem) => {
          const clientItem = clientDataMap.get(getKey(serverItem));
          if (clientItem) {
            clientDataMap.delete(getKey(serverItem));
            return [...merged, clientItem];
          }
          return [...merged, serverItem];
        }, [])
      : [];

  const leftoverClientData = Array.from(clientDataMap.values());

  return [...mergedData, ...leftoverClientData];
};

export const useSync = <T>(options: {
  localStorageKey: string;
  serverQuery: UseQueryResult<T[], unknown>;
  getLocalStorageData: () => { state: { data: T[] } } | null;
  setData: (data: T[]) => void;
  getKey: (item: T) => number | string;
  updateServer?: (data: T[]) => Promise<void>;
}) => {
  const {
    localStorageKey,
    serverQuery,
    getLocalStorageData,
    setData,
    getKey,
    updateServer,
  } = options;

  useEffect(() => {
    try {
      const localStorageData = getLocalStorageData();
      const serverData = serverQuery.data || [];
      const clientData = localStorageData?.state.data || [];

      const syncedData = mergeClientAndServerData(
        clientData,
        serverData,
        getKey
      );

      setData(syncedData);
    } catch (error) {
      console.log(`useSync useEffect Error for ${localStorageKey}: `, error);
    }
  }, [serverQuery.data]);

  const handleUpdateServer = async () => {
    if (updateServer) {
      const localStorageData = getLocalStorageData();
      const clientData = localStorageData?.state.data || [];
      await updateServer(clientData);
    }
  };

  return { update: handleUpdateServer };
};
