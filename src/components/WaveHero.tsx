import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { getWaveColors, createGradient } from '@/lib/colors';
import { useEffect, useState } from 'react';
import { CircularGradient } from './CircularGradients';

interface WaveHeroProps {
  children: React.ReactNode;
  height?: number;
  className?: string;
  animated?: boolean;
  showCircularGradients?: boolean;
}

const WaveHero = ({ 
  children, 
  height = 400, 
  className = "",
  animated = true,
  showCircularGradients = true
}: WaveHeroProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const waveColors = getWaveColors();
  const [gradientColors, setGradientColors] = useState([
    waveColors[0],
    waveColors[2],
    waveColors[4]
  ]);

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        const newIndex = (colorIndex + 1) % waveColors.length;
        setColorIndex(newIndex);
        setGradientColors([
          waveColors[newIndex], 
          waveColors[(newIndex + 2) % waveColors.length], 
          waveColors[(newIndex + 4) % waveColors.length]
        ]);
      }, 15000); // Slower for smoother transitions
      return () => clearInterval(interval);
    }
  }, [animated, colorIndex, waveColors]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: height }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(135deg, ${gradientColors[0]}15, ${gradientColors[1]}10, ${gradientColors[2]}20)`,
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(135deg, ${gradientColors[0]}15, ${gradientColors[1]}10, ${gradientColors[2]}20)`,
        }}
      />
      
      {/* Multiple wave layers with smooth transitions - reduced opacity */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{ color: `${gradientColors[0]}30` }}
          transition={{ duration: 10, ease: "easeInOut" }}
          style={{ opacity: 0.6 }}
        >
          <Wave
            fill="currentColor"
            paused={false}
            style={{ 
              display: 'flex',
              height: '120px',
            }}
            options={{
              height: 30,
              amplitude: 20,
              speed: 0.25,
              points: 4,
            }}
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{ color: `${gradientColors[1]}25` }}
          transition={{ duration: 10, ease: "easeInOut" }}
          style={{ opacity: 0.5 }}
        >
          <Wave
            fill="currentColor"
            paused={false}
            style={{ 
              display: 'flex',
              height: '100px',
            }}
            options={{
              height: 25,
              amplitude: 15,
              speed: 0.18,
              points: 3,
            }}
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{ color: `${gradientColors[2]}35` }}
          transition={{ duration: 10, ease: "easeInOut" }}
          style={{ opacity: 0.4 }}
        >
          <Wave
            fill="currentColor"
            paused={false}
            style={{ 
              display: 'flex',
              height: '80px',
            }}
            options={{
              height: 20,
              amplitude: 25,
              speed: 0.12,
              points: 5,
            }}
          />
        </motion.div>
      </div>
      
      {/* Circular gradients */}
      {showCircularGradients && (
        <>
          <CircularGradient 
            size="200px" 
            opacity={0.04}
            duration={15} 
            className="top-16 left-16" 
          />
          <CircularGradient 
            size="150px" 
            opacity={0.06}
            duration={12} 
            delay={4} 
            className="top-20 right-20" 
          />
          <CircularGradient 
            size="180px" 
            opacity={0.05}
            duration={18} 
            delay={8} 
            className="top-32 left-1/3" 
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center" style={{ minHeight: height }}>
        {children}
      </div>
    </motion.div>
  );
};

export default WaveHero;
