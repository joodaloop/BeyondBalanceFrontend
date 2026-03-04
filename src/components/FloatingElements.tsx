import { motion } from 'framer-motion';
import { pastelBubblegumColors, getRandomColor, createGradient, createRadialGradient } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface FloatingElementProps {
  type?: 'blob' | 'circle' | 'oval';
  size?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const FloatingElement = ({ 
  type = 'blob', 
  size = 60, 
  duration = 8, 
  delay = 0, 
  className = "" 
}: FloatingElementProps) => {
  const [colors, setColors] = useState([getRandomColor(), getRandomColor()]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors([getRandomColor(), getRandomColor()]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getShapeStyles = () => {
    const baseStyles = {
      width: size,
      height: size,
      background: createRadialGradient(colors[0], colors[1]),
      filter: 'blur(0.5px) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
    };

    switch (type) {
      case 'circle':
        return {
          ...baseStyles,
          borderRadius: '50%',
        };
      case 'oval':
        return {
          ...baseStyles,
          borderRadius: '50%',
          width: size * 1.5,
          height: size,
        };
      case 'blob':
      default:
        return {
          ...baseStyles,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        };
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={getShapeStyles()}
      initial={{ 
        opacity: 0, 
        scale: 0,
        rotate: 0,
      }}
      animate={{ 
        opacity: [0, 0.6, 0.8, 0.6, 0],
        scale: [0, 1.2, 1, 1.1, 0],
        rotate: [0, 180, 360],
        y: [0, -20, 0, -10, 0],
        x: [0, 10, -10, 5, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

interface FloatingElementsProps {
  count?: number;
  containerClassName?: string;
}

const FloatingElements = ({ count = 8, containerClassName = "" }: FloatingElementsProps) => {
  const elements = Array.from({ length: count }, (_, i) => {
    const types: ('blob' | 'circle' | 'oval')[] = ['blob', 'circle', 'oval'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const size = Math.random() * 80 + 40; // 40-120px
    const duration = Math.random() * 6 + 6; // 6-12s
    const delay = Math.random() * 4; // 0-4s delay
    
    return (
      <FloatingElement
        key={i}
        type={randomType}
        size={size}
        duration={duration}
        delay={delay}
        className={`
          ${i % 4 === 0 ? 'top-10 left-10' : ''}
          ${i % 4 === 1 ? 'top-20 right-16' : ''}
          ${i % 4 === 2 ? 'bottom-32 left-20' : ''}
          ${i % 4 === 3 ? 'bottom-20 right-12' : ''}
          ${i % 8 === 4 ? 'top-1/3 left-1/4' : ''}
          ${i % 8 === 5 ? 'top-2/3 right-1/4' : ''}
          ${i % 8 === 6 ? 'top-1/2 left-1/3' : ''}
          ${i % 8 === 7 ? 'bottom-1/3 right-1/3' : ''}
        `}
      />
    );
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${containerClassName}`}>
      {elements}
    </div>
  );
};

export { FloatingElement, FloatingElements };
