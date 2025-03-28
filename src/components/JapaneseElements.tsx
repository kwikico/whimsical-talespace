
import React from 'react';

interface JapaneseElementsProps {
  type?: 'torii' | 'mountain' | 'sakura' | 'pagoda' | 'wave';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  opacity?: number;
}

const JapaneseElements: React.FC<JapaneseElementsProps> = ({
  type = 'sakura',
  position = 'bottom-right',
  size = 'medium',
  color,
  opacity = 0.8
}) => {
  // Size mapping
  const getSize = () => {
    switch (size) {
      case 'small': return 60;
      case 'medium': return 120;
      case 'large': return 200;
      default: return 120;
    }
  };

  // Position mapping
  const getPosition = () => {
    switch (position) {
      case 'top-left': return 'top-0 left-0';
      case 'top-right': return 'top-0 right-0';
      case 'bottom-left': return 'bottom-0 left-0';
      case 'bottom-right': return 'bottom-0 right-0';
      case 'center': return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      default: return 'bottom-0 right-0';
    }
  };

  // Default colors for elements
  const getDefaultColor = () => {
    switch (type) {
      case 'torii': return '#E74C3C';
      case 'mountain': return '#6D8B74';
      case 'sakura': return '#FFCAD4';
      case 'pagoda': return '#8A6552';
      case 'wave': return '#1B98E0';
      default: return '#FFCAD4';
    }
  };

  const elementColor = color || getDefaultColor();
  const elementSize = getSize();
  const elementPosition = getPosition();

  // Render different Japanese elements based on type
  const renderElement = () => {
    switch (type) {
      case 'torii':
        return (
          <svg viewBox="0 0 100 100" width={elementSize} height={elementSize} fill="none">
            <path d="M10,30 L10,90 L20,90 L20,30 L10,30 Z" fill={elementColor} />
            <path d="M80,30 L80,90 L90,90 L90,30 L80,30 Z" fill={elementColor} />
            <path d="M5,30 L95,30 L95,20 L5,20 L5,30 Z" fill={elementColor} />
            <path d="M15,15 L85,15 L85,5 L15,5 L15,15 Z" fill={elementColor} />
          </svg>
        );
      case 'mountain':
        return (
          <svg viewBox="0 0 100 100" width={elementSize} height={elementSize} fill="none">
            <path d="M10,90 L50,20 L90,90 L10,90 Z" fill={elementColor} />
            <circle cx="50" cy="15" r="8" fill="#FFFFFF" />
          </svg>
        );
      case 'pagoda':
        return (
          <svg viewBox="0 0 100 100" width={elementSize} height={elementSize} fill="none">
            <path d="M35,90 L65,90 L65,70 L35,70 L35,90 Z" fill={elementColor} />
            <path d="M30,70 L70,70 L70,50 L30,50 L30,70 Z" fill={elementColor} />
            <path d="M25,50 L75,50 L75,30 L25,30 L25,50 Z" fill={elementColor} />
            <path d="M20,30 L80,30 L80,10 L20,10 L20,30 Z" fill={elementColor} />
            <path d="M15,10 L85,10 L75,2 L25,2 L15,10 Z" fill={elementColor} />
          </svg>
        );
      case 'wave':
        return (
          <svg viewBox="0 0 100 50" width={elementSize * 2} height={elementSize} fill="none">
            <path d="M0,25 C10,10 20,40 30,25 C40,10 50,40 60,25 C70,10 80,40 90,25 C100,10 110,40 120,25 L120,50 L0,50 Z" fill={elementColor} />
          </svg>
        );
      case 'sakura':
      default:
        return (
          <svg viewBox="0 0 100 100" width={elementSize} height={elementSize} fill="none">
            <circle cx="50" cy="50" r="10" fill={elementColor} />
            <path d="M50,10 Q60,30 80,30 Q60,40 60,60 Q50,80 40,60 Q30,80 20,60 Q10,40 30,40 Q20,20 40,20 Q45,10 50,10 Z" fill={elementColor} />
          </svg>
        );
    }
  };

  return (
    <div className={`absolute ${elementPosition} pointer-events-none z-0`} style={{ opacity }}>
      {renderElement()}
    </div>
  );
};

export default JapaneseElements;
