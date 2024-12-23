import { useEffect, useRef } from "react";

const useReactInfinityScroll = (callback: () => void, rootMargin: string = "70%") => {
  const observer = useRef<IntersectionObserver | null>(null);
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      {
        root: null,
        rootMargin: rootMargin,
        threshold: 1.0,
      }
    );

    if (bottomBoundaryRef.current) {
      observer.current.observe(bottomBoundaryRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [callback]);

  return { bottomBoundaryRef };
};

export default useReactInfinityScroll;
