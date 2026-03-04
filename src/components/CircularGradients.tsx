import { motion } from 'framer-motion';
import { createMildCircularGradient, getWaveColors } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface CircularGradientProps {
  size?: string;
  opacity?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const CircularGradient = ({ 
  size = '300px', 
  opacity = 0.06,
  duration = 12, 
  delay = 0, 
  className = "" 
}: CircularGradientProps) => {
  const [gradientStyle, setGradientStyle] = useState(createMildCircularGradient(size, opacity));
  const [colorIndex, setColorIndex] = useState(0);
  const waveColors = getWaveColors();

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % waveColors.length);
      setGradientStyle(createMildCircularGradient(size, opacity));
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [size, opacity, duration, waveColors.length]);

  return (
    <motion.div
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        ...gradientStyle,
        filter: 'blur(1px)',
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
      }}
      animate={{ 
        opacity: [0, opacity * 10, opacity * 8, opacity * 10, 0],
        scale: [0.8, 1.2, 1, 1.1, 0.8],
        rotate: [0, 180, 360],
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

interface CircularGradientsProps {
  count?: number;
  containerClassName?: string;
}

const CircularGradients = ({ count = 6, containerClassName = "" }: CircularGradientsProps) => {
  const elements = Array.from({ length: count }, (_, i) => {
    const size = `${Math.random() * 200 + 150}px`; // 150-350px
    const opacity = Math.random() * 0.04 + 0.02; // 0.02-0.06
    const duration = Math.random() * 8 + 10; // 10-18s
    const delay = Math.random() * 6; // 0-6s delay
    
    return (
      <CircularGradient
        key={i}
        size={size}
        opacity={opacity}
        duration={duration}
        delay={delay}
        className={`
          ${i % 4 === 0 ? 'top-10 left-10' : ''}
          ${i % 4 === 1 ? 'top-20 right-16' : ''}
          ${i % 4 === 2 ? 'bottom-32 left-20' : ''}
          ${i % 4 === 3 ? 'bottom-20 right-12' : ''}
          ${i % 6 === 4 ? 'top-1/3 left-1/4' : ''}
          ${i % 6 === 5 ? 'top-2/3 right-1/4' : ''}
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

export { CircularGradient, CircularGradients };
