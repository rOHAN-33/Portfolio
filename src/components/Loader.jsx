import React, { useEffect, useRef, useState } from 'react';

const Loader = ({ onComplete }) => {
  const counterRef = useRef(null);
  const barRefs = useRef([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load GSAP script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      startCounterAnimation();
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const startCounterAnimation = () => {
    let value = 0;
    
    const updateCounter = () => {
      if (value >= 100) {
        setCurrentValue(100);
        startGSAPAnimations();
        return;
      }
      
      value += Math.floor(Math.random() * 10) + 1;
      if (value > 100) value = 100;
      
      setCurrentValue(value);
      
      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };
    
    updateCounter();
  };

  const startGSAPAnimations = () => {
    // Counter fade out
    window.gsap.to(counterRef.current, {
      delay: 3.5,
      opacity: 0,
      duration: 0.25,
    });

    // Bars animation
    window.gsap.to(barRefs.current, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: 'power4.inOut',
      duration: 1.5,
      onComplete: () => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }
    });
  };

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Counter */}
      <h1 
        className="fixed w-full h-full flex justify-end items-end text-[#bcbcc4] pointer-events-none"
        style={{ 
          fontSize: '20vw',
          padding: '0.2rem 0.4em',
          zIndex: 10000,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 'normal',
          margin: 0
        }}
        ref={counterRef}
      >
        {currentValue}
      </h1>
      
      {/* Overlay with bars */}
      <div className="fixed inset-0 flex" style={{ width: '100vw', height: '100vh' }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#cccccc]"
            style={{ 
              width: '10vw', 
              height: '105vh',
              display: 'block'
            }}
            ref={el => (barRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;