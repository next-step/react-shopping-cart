import { useEffect, useState } from 'react';

// 참조: https://velog.io/@real-bird/SWR-Infinite-Scroll
function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  async function handleScroll() {
    if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    isBottom,
  };
}

export default useScrollBottom;
