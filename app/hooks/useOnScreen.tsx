import { useState, useEffect, RefObject } from "react";

const useOnScreen = (
  ref: RefObject<HTMLElement | null>,
  threshold: number = 0,
  rootMargin: string = "0px"
): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      rootMargin,
      threshold,
    }
  );

  useEffect(() => {
    const currentElement = ref?.current;
    if (currentElement) {
      observer.observe(currentElement); // Observe the current element
    }

    // Cleanup observer when component is unmounted or ref changes
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Unobserve the element on cleanup
      }
    };
  }, [ref, observer]); // Rerun the effect if ref or observer changes
  return isVisible;
};

export default useOnScreen;
