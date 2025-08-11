import { useEffect, useState } from 'react';

export function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Base parallax dots */}
      <div className="parallax-dots"></div>
      
      {/* Interactive floating dots */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${15 + (i * 8) % 70}%`,
              transform: `translate(${(mousePosition.x - 50) * (0.02 + i * 0.001) + scrollY * (0.1 + i * 0.02)}px, ${(mousePosition.y - 50) * (0.02 + i * 0.001) + scrollY * (0.05 + i * 0.01)}px)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
        
        {[...Array(10)].map((_, i) => (
          <div
            key={`secondary-${i}`}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-bounce-slow"
            style={{
              left: `${20 + (i * 8) % 60}%`,
              top: `${25 + (i * 7) % 50}%`,
              transform: `translate(${(mousePosition.x - 50) * (0.03 + i * 0.002) + scrollY * (0.15 + i * 0.03)}px, ${(mousePosition.y - 50) * (0.03 + i * 0.002) + scrollY * (0.08 + i * 0.015)}px)`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 2)}s`,
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <div
            key={`accent-${i}`}
            className="absolute w-3 h-3 bg-accent/15 rounded-full animate-pulse-glow"
            style={{
              left: `${30 + (i * 9) % 40}%`,
              top: `${35 + (i * 6) % 40}%`,
              transform: `translate(${(mousePosition.x - 50) * (0.015 + i * 0.001) + scrollY * (0.08 + i * 0.02)}px, ${(mousePosition.y - 50) * (0.015 + i * 0.001) + scrollY * (0.04 + i * 0.008)}px)`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 2)}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse-glow"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.01}px, ${(mousePosition.y - 50) * 0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/3 via-transparent to-transparent"
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.008}px, ${(mousePosition.y - 50) * -0.008}px)`,
            transition: 'transform 0.4s ease-out'
          }}
        />
      </div>
    </>
  );
}