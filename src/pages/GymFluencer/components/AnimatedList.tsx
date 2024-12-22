import { useEffect, useRef, useState } from 'react';

const AnimatedList = () => {
  const divRef = useRef(null);
  const [scale, setScale] = useState(1); // Default scale is full size

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate scale based on intersection ratio (how much is visible)
        setScale(entry.intersectionRatio); // intersectionRatio is a value between 0 and 1
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained thresholds
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="bg-black hidden lg:flex transform transition-transform duration-300 my-20"
      style={{ transform: `scale(${scale})` }}
    >
      <ul className="flex flex-col w-full">
        <div className="flex text-[64px] justify-between font-orbitron font-semibold leading-[120%] text-center text-[#FFFFFF]">
          <li>Fitness</li>
          <li>/</li>
          <li>Transformation</li>
          <li>/</li>
          <li>Motivation</li>
        </div>
        <div className="flex text-[64px] font-orbitron justify-between font-semibold leading-[120%] text-center text-[#ea0201] opacity-30">
          <li>/</li>
          <li>Progress</li>
          <li>/</li>
          <li>Work</li>
          <li>/</li>
          <li>Community</li>
          <li>/</li>
          <li>Strength</li>
        </div>
      </ul>
    </div>
  );
};

export default AnimatedList;
