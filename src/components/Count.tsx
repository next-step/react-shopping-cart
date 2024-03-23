import type { PropsWithChildren } from "react";

interface CountProps extends PropsWithChildren {
  count: number;
}

const Count = ({ count, children }: CountProps) => {
  return (
    <div className="relative">
      {children}
      {count > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default Count;
