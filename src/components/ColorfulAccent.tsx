import { motion } from 'framer-motion';
import { pastelBubblegumColors, createGradient } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface ColorfulAccentProps {
  children: React.ReactNode;
  className?: string;
  accentType?: 'border' | 'glow' | 'background' | 'underline';
  animated?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
}

const ColorfulAccent = ({ 
  children, 
  className = "", 
  accentType = 'glow',
  animated = true,
  intensity = 'medium'
}: ColorfulAccentProps) => {
  const [accentColor, setAccentColor] = useState(pastelBubblegumColors[0]);
  const [gradientColors, setGradientColors] = useState([
    pastelBubblegumColors[0],
    pastelBubblegumColors[1]
  ]);

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        const shuffled = [...pastelBubblegumColors].sort(() => 0.5 - Math.random());
        setAccentColor(shuffled[0]);
        setGradientColors([shuffled[0], shuffled[1]]);
      }, 12000); // Much slower for smoother transitions
      return () => clearInterval(interval);
    }
  }, [animated]);

  const getIntensityValue = () => {
    switch (intensity) {
      case 'light': return 0.2;
      case 'medium': return 0.4;
      case 'strong': return 0.7;
      default: return 0.4;
    }
  };

  const getAccentStyles = () => {
    const intensityVal = getIntensityValue();
    
    switch (accentType) {
      case 'border':
        return {
          border: `2px solid ${accentColor}`,
          borderRadius: '12px',
        };
      case 'glow':
        return {
          boxShadow: `0 0 15px ${accentColor}${Math.floor(intensityVal * 255).toString(16).padStart(2, '0')}, 0 0 30px ${accentColor}${Math.floor(intensityVal * 0.4 * 255).toString(16).padStart(2, '0')}`,
        };
      case 'background':
        return {
          background: createGradient(gradientColors[0], gradientColors[1]),
          opacity: intensityVal * 0.3,
        };
      case 'underline':
        return {
          borderBottom: `3px solid ${accentColor}`,
          borderImage: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]}) 1`,
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {accentType === 'background' && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            background: createGradient(gradientColors[0], gradientColors[1]),
            opacity: [getIntensityValue() * 0.2, getIntensityValue() * 0.3, getIntensityValue() * 0.25],
          }}
          transition={{
            background: {
              duration: 8,
              ease: "easeInOut",
            },
            opacity: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }
          }}
          style={getAccentStyles()}
        />
      )}
      <motion.div
        className="relative z-10"
        animate={accentType === 'glow' ? {
          boxShadow: [
            `0 0 15px ${accentColor}30, 0 0 30px ${accentColor}15`,
            `0 0 25px ${accentColor}40, 0 0 45px ${accentColor}20`,
            `0 0 15px ${accentColor}30, 0 0 30px ${accentColor}15`,
          ],
        } : accentType === 'border' ? {
          borderColor: accentColor,
        } : {}}
        transition={{
          duration: 8,
          repeat: accentType === 'glow' ? Infinity : 0,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={accentType !== 'background' ? getAccentStyles() : {}}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ColorfulAccent;
