// AnimatedCounter.tsx

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ endValue, duration = 2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = () => {
    const element = document.getElementById('counter');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsVisible(isInViewport);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div id="counter">
      {isVisible ? (
        <CountUp start={0} end={endValue} duration={duration} />
      ) : (
        <span>0</span>
      )}
    </div>
  );
};

export default AnimatedCounter;
