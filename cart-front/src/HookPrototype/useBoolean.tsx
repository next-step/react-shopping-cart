import { useState, useCallback } from "react";

const useBoolean = (initialValue: boolean) => {
  const [boolean, setBoolean] = useState(initialValue);

  const onChangeBoolean = useCallback(() => {
    setBoolean((boolean: boolean) => !boolean);
  }, []);

  return [boolean, onChangeBoolean];
};

export default useBoolean;
