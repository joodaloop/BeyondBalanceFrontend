import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { getWaveColors } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface MultiLayeredWaveProps {
  height?: number;
  className?: string;
  opacity?: number;
}

const MultiLayeredWave = ({ 
  height = 100, 
  className = "", 
  opacity = 0.6 
}: MultiLayeredWaveProps) => {
  const [colorIndices, setColorIndices] = useState([0, 1, 2]);
  const waveColors = getWaveColors();

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndices(prev => [
        (prev[0] + 3) % waveColors.length,
        (prev[1] + 3) % waveColors.length,
        (prev[2] + 3) % waveColors.length,
      ]);
    }, 12000); // Slower color changes for smoother transitions
    return () => clearInterval(interval);
  }, [waveColors.length]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ height }}
    >
      {/* Wave Layer 1 - Back */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{
            color: waveColors[colorIndices[0]],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
          }}
          style={{
            color: waveColors[colorIndices[0]],
            opacity: opacity * 0.6,
          }}
        >
          <Wave
            fill="currentColor"
            paused={false}
            style={{ 
              display: 'flex',
              height: height * 0.8 + 'px',
            }}
            options={{
              height: Math.max(15, height * 0.2),
              amplitude: Math.max(20, height * 0.25),
              speed: 0.12,
              points: 4,
            }}
          />
        </motion.div>
      </div>

      {/* Wave Layer 2 - Middle */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{
            color: waveColors[colorIndices[1]],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
          }}
          style={{
            color: waveColors[colorIndices[1]],
            opacity: opacity * 0.7,
          }}
        >
          <Wave
            fill="currentColor"
            paused={false}
            style={{ 
              display: 'flex',
              height: height * 0.6 + 'px',
            }}
            options={{
              height: Math.max(12, height * 0.15),
              amplitude: Math.max(15, height * 0.2),
              speed: 0.18,
              points: 3,
            }}
          />
        </motion.div>
      </div>

      {/* Wave Layer 3 - Front */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{
            color: waveColors[colorIndices[2]],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
          }}
          style={{
            color: waveColors[colorIndices[2]],
            opacity: opacity * 0.8,
          }}
        >
          <Wave
            fill="currentColor"
            paused={false}
            style={{ 
              display: 'flex',
              height: height * 0.4 + 'px',
            }}
            options={{
              height: Math.max(10, height * 0.12),
              amplitude: Math.max(12, height * 0.15),
              speed: 0.25,
              points: 5,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MultiLayeredWave;
