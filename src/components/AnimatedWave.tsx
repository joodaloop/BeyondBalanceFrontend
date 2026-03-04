import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { getWaveColors, getSequentialColor } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface AnimatedWaveProps {
  height?: number;
  amplitude?: number;
  speed?: number;
  points?: number;
  className?: string;
  fill?: string;
  opacity?: number;
}

const AnimatedWave = ({ 
  height = 100, 
  amplitude = 20, 
  speed = 0.15, 
  points = 3, 
  className = "", 
  fill,
  opacity = 0.6 
}: AnimatedWaveProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const waveColors = getWaveColors();
  const waveColor = fill || waveColors[colorIndex];

  useEffect(() => {
    if (!fill) {
      const interval = setInterval(() => {
        setColorIndex((prev) => (prev + 1) % waveColors.length);
      }, 10000); // Slower color changes for smoother transitions
      return () => clearInterval(interval);
    }
  }, [fill, waveColors.length]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ height }}
    >
      <motion.div
        animate={{
          color: waveColor,
        }}
        transition={{
          duration: 6, // Smooth color transition
          ease: "easeInOut",
        }}
        style={{
          color: waveColor,
          opacity: opacity,
        }}
      >
        <Wave
          fill="currentColor"
          paused={false}
          style={{ 
            display: 'flex',
          }}
          options={{
            height: amplitude,
            amplitude: amplitude,
            speed: speed,
            points: points,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedWave;
