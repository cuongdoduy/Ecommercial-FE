import React, { useState, useEffect } from "react";
function useCounterAnimation(targetNumber: number, isVisible: boolean) {
  const [counter, setCounter] = useState(0);
  const duration = 1000;
  const intervalTime = 10;
  const incrementValue = targetNumber / (duration / intervalTime);

  useEffect(() => {
    if (!isVisible) return;

    const increment = () => {
      if (counter < targetNumber) {
        setCounter((prevCounter) =>
          Math.min(prevCounter + incrementValue, targetNumber)
        );
      }
    };

    const timer = setInterval(increment, intervalTime);
    return () => clearInterval(timer);
  }, [counter, targetNumber, isVisible, incrementValue]);

  return Math.floor(counter);
}

export default useCounterAnimation;
