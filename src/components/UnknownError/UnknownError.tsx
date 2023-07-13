import React, { useMemo } from "react";
import { IResponseError } from "../../domain/types/response";
import { convertToViewError } from "../../hooks/utils";
import { PrimaryButton } from "../PrimaryButton";

type TProps = {
  resetErrorBoundary?: () => void;
  error: IResponseError;
};

function UnknownError({ resetErrorBoundary, error }: TProps) {
  const retry = useMemo(() => () => resetErrorBoundary?.(), []);

  return (
    <div style={{ padding: "5rem" }}>
      <h1 style={{ fontSize: "5rem", textAlign: "center" }}>😱 앗!</h1>
      <h2 style={{ fontSize: "2rem", textAlign: "center" }}>{convertToViewError(error).message}</h2>
      {retry && (
        <div style={{ textAlign: "center", marginTop: "16px", padding: "8px" }}>
          <PrimaryButton onClick={retry}>재시도</PrimaryButton>
        </div>
      )}
    </div>
  );
}

export default UnknownError;
