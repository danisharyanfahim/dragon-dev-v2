import { useState, useEffect, useMemo, RefObject } from "react";

const useOnScreen = (
  ref: RefObject<HTMLElement | null>,
  threshold: number | number[],
  rootMargin: string = "0px"
): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const observer = useMemo((): IntersectionObserver => {
    return new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold,
      }
    );
  }, [ref]);

  useEffect(() => {
    const currentElement = ref?.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return isVisible;
};

export default useOnScreen;
