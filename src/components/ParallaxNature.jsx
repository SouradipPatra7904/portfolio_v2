import React, { useState, useEffect } from "react";
import "../styles/ParallaxNature.css";

const layers = [
  {
    id: 'clouds',
    speed: -0.05,
    svg: (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="30" rx="50" ry="20" fill="#ffffff" opacity="0.5" />
        <ellipse cx="150" cy="30" rx="50" ry="20" fill="#ffffff" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'mountains',
    speed: 0.1,
    svg: (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,60 50,20 100,60" fill="#4a90e2" />
        <polygon points="50,60 150,10 200,60" fill="#4a90e2" />
      </svg>
    ),
  },
  {
    id: 'trees',
    speed: 0.2,
    svg: (
      <svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="60" width="10" height="30" fill="#228b22" />
        <polygon points="0,60 25,10 50,60" fill="#228b22" />
      </svg>
    ),
  },
  {
    id: 'foreground',
    speed: 0.3,
    svg: (
      <svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="10" height="30" fill="#228b22" />
        <polygon points="0,70 25,20 50,70" fill="#228b22" />
      </svg>
    ),
  },
];

export default function ParallaxNature() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-nature">
      {layers.map((layer) => (
        <div
          key={layer.id}
          className={`layer ${layer.id}`}
          style={{ transform: `translateY(${scrollY * layer.speed}px)` }}
        >
          {layer.svg}
        </div>
      ))}
    </div>
  );
}
