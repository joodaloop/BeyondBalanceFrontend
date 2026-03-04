import { motion } from 'framer-motion';
import { pastelBubblegumColors, createGradient } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  animated?: boolean;
}

const AnimatedBackground = ({ 
  children, 
  className = "", 
  intensity = 'subtle',
  animated = true 
}: AnimatedBackgroundProps) => {
  const [currentGradient, setCurrentGradient] = useState(
    createGradient(pastelBubblegumColors[0], pastelBubblegumColors[1])
  );

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        const shuffled = [...pastelBubblegumColors].sort(() => 0.5 - Math.random());
        setCurrentGradient(createGradient(shuffled[0], shuffled[1]));
      }, 15000); // Much slower for smoother transitions
      return () => clearInterval(interval);
    }
  }, [animated]);

  const getOpacity = () => {
    switch (intensity) {
      case 'subtle': return 0.02;
      case 'medium': return 0.05;
      case 'vibrant': return 0.1;
      default: return 0.03;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: currentGradient,
          opacity: [getOpacity() * 0.7, getOpacity(), getOpacity() * 0.9, getOpacity()],
        }}
        transition={{
          background: {
            duration: 8, // Very smooth background transitions
            ease: "easeInOut",
          },
          opacity: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }
        }}
        style={{
          background: currentGradient,
          opacity: getOpacity(),
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
