import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { getWaveColors, createGradient } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  height?: number;
  className?: string;
  animated?: boolean;
}

const WaveDivider = ({ 
  position = 'bottom', 
  height = 120, 
  className = "",
  animated = true 
}: WaveDividerProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const waveColors = getWaveColors();
  const [gradientColors, setGradientColors] = useState([
    waveColors[0],
    waveColors[1]
  ]);

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        const newIndex = (colorIndex + 1) % waveColors.length;
        setColorIndex(newIndex);
        setGradientColors([waveColors[newIndex], waveColors[(newIndex + 1) % waveColors.length]]);
      }, 12000); // Slower for smoother transitions
      return () => clearInterval(interval);
    }
  }, [animated, colorIndex, waveColors]);

  const isTop = position === 'top';

  return (
    <motion.div
      className={`relative w-full ${className}`}
      style={{ height }}
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: createGradient(gradientColors[0], gradientColors[1]),
        }}
        transition={{
          duration: 8, // Smooth color transition
          ease: "easeInOut",
        }}
        style={{
          background: createGradient(gradientColors[0], gradientColors[1]),
          transform: isTop ? 'rotate(180deg)' : 'none',
          opacity: 0.7, // Reduced opacity to prevent stacking darkness
        }}
      >
        <Wave
          fill="rgba(255, 255, 255, 0.6)"
          paused={false}
          style={{ 
            display: 'flex',
            height: '100%',
          }}
          options={{
            height: 40,
            amplitude: 25,
            speed: 0.2,
            points: 4,
          }}
        />
      </motion.div>
      
      {/* Additional decorative waves - reduced opacity */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          color: gradientColors[1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
        style={{
          transform: isTop ? 'rotate(180deg)' : 'none',
          color: gradientColors[1],
        }}
      >
        <Wave
          fill="currentColor"
          paused={false}
          style={{ 
            display: 'flex',
            height: '100%',
          }}
          options={{
            height: 20,
            amplitude: 15,
            speed: 0.15,
            points: 3,
          }}
        />
      </motion.div>

      {/* Third wave layer for consistency */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{
          color: waveColors[(colorIndex + 2) % waveColors.length],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
        style={{
          transform: isTop ? 'rotate(180deg)' : 'none',
          color: waveColors[(colorIndex + 2) % waveColors.length],
        }}
      >
        <Wave
          fill="currentColor"
          paused={false}
          style={{ 
            display: 'flex',
            height: '70%',
          }}
          options={{
            height: 15,
            amplitude: 12,
            speed: 0.25,
            points: 5,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WaveDivider;
