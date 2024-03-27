import type { ComponentProps, ReactNode } from "react";

interface NoDataProps extends ComponentProps<"div"> {
  message?: ReactNode;
}

const NoData = ({ message }: NoDataProps) => {
  return (
    <div className="flex flex-col text-center">
      <span className="text-3xl mb-3">😮</span>
      <span>{message || "데이터가 없습니다."}</span>
    </div>
  );
};

export default NoData;
