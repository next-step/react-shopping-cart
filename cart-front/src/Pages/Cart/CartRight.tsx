import { ReactNode } from "react";

export const CartRightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-1/3 h-64 ml-1/20 mt-20 border border-solid border-gray-300">
      {children}
    </div>
  );
};
