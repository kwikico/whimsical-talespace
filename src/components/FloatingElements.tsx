
import React from 'react';

interface FloatingElementsProps {
  type?: 'clouds' | 'leaves' | 'lanterns';
  density?: 'low' | 'medium' | 'high';
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  type = 'clouds', 
  density = 'medium' 
}) => {
  // Determine number of elements based on density
  const getCount = () => {
    switch(density) {
      case 'low': return 3;
      case 'medium': return 6;
      case 'high': return 10;
      default: return 6;
    }
  };
  
  const count = getCount();
  const elements = [];
  
  // Generate elements
  for (let i = 0; i < count; i++) {
    const delay = `${Math.random() * 15}s`;
    const size = 30 + Math.random() * 40; // Size between 30-70px
    const top = `${10 + Math.random() * 70}%`;
    const opacity = 0.3 + Math.random() * 0.5; // Opacity between 0.3-0.8
    
    if (type === 'clouds') {
      elements.push(
        <div 
          key={i}
          className="floating-cloud animate-drift"
          style={{ 
            top, 
            width: `${size * 2}px`, 
            height: `${size}px`,
            opacity,
            animationDelay: delay,
            animationDuration: `${30 + Math.random() * 20}s`,
          }}
        >
          <svg viewBox="0 0 200 100" fill="#ffffff">
            <path d="M20,50 Q40,20 60,30 Q70,5 100,20 Q140,0 160,30 Q180,15 190,40 Q220,35 180,60 Q200,90 140,80 Q130,100 100,80 Q80,105 60,80 Q40,110 20,80 Q-10,65 20,50" />
          </svg>
        </div>
      );
    } else if (type === 'leaves') {
      elements.push(
        <div 
          key={i}
          className="absolute pointer-events-none animate-float"
          style={{ 
            top, 
            left: `${Math.random() * 100}%`,
            width: `${size / 2}px`, 
            height: `${size / 2}px`,
            opacity,
            animationDelay: delay,
            animationDuration: `${5 + Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <svg viewBox="0 0 100 100" fill="#738C79" opacity={opacity}>
            <path d="M50,0 Q70,30 100,50 Q70,70 50,100 Q30,70 0,50 Q30,30 50,0" />
          </svg>
        </div>
      );
    } else if (type === 'lanterns') {
      const hue = Math.floor(30 + Math.random() * 30); // Orangish color
      const lightness = Math.floor(70 + Math.random() * 20); // Bright
      
      elements.push(
        <div 
          key={i}
          className="absolute pointer-events-none animate-float"
          style={{ 
            top, 
            left: `${Math.random() * 100}%`,
            width: `${size / 2}px`, 
            height: `${size}px`,
            opacity,
            animationDelay: delay,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <div className="w-full h-full flex flex-col items-center">
            <div className="w-1/2 h-1/5 bg-ghibli-earth rounded-t-full"></div>
            <div 
              className="w-full h-4/5 rounded-3xl" 
              style={{ backgroundColor: `hsl(${hue}, 90%, ${lightness}%)` }}
            ></div>
          </div>
        </div>
      );
    }
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {elements}
    </div>
  );
};

export default FloatingElements;
