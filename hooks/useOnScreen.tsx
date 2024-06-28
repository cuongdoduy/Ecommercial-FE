import React, { useState, useRef, useEffect, LegacyRef } from "react";

const useOnScreen = (): [LegacyRef<HTMLDivElement> | undefined, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const currentRef = ref.current;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default useOnScreen;
