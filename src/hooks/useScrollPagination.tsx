import { useEffect, useState } from "react";

type UseScrollPaginationProps = {
  onLoadMore: () => void;
  threshold?: number;
};

export const useScrollPagination = ({
  onLoadMore,
  threshold = 0,
}: UseScrollPaginationProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight + threshold >= scrollHeight && !isLoading) {
        setIsLoading(true);
        onLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, onLoadMore, threshold]);

  return { isLoading, setIsLoading };
};