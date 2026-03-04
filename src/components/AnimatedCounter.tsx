import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  metric: string;
  className?: string;
  duration?: number;
  showFullNumber?: boolean;
}

const AnimatedCounter = ({ metric, className = "", duration = 2, showFullNumber = false }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState<string>("");
  const [fullNumberValue, setFullNumberValue] = useState<string>("");

  useEffect(() => {
    if (isInView) {
      animateCounter();
    }
  }, [isInView]);

  const animateCounter = () => {
    // Parse different types of metrics
    if (metric === "$6T") {
      // Count from 5.98T to 6T
      animateTrillions(5.98, 6.0);
    } else if (metric === "#1") {
      // Count down from a higher number to 1
      animateRanking(5, 1);
    } else if (metric === "Top 4") {
      // Count down from higher number to 4
      animateRanking(10, 4);
    } else if (metric === "70%") {
      // Count up to 70%
      animatePercentage(0, 70);
    } else if (metric === "1:100k") {
      // Count down from higher ratio to 1
      animateRatio(3, 1);
    } else if (metric === "800k+") {
      // Count up to 800k
      animateThousands(750, 800);
    } else {
      // Fallback - just show the metric
      setDisplayValue(metric);
    }
  };

  const animateTrillions = (from: number, to: number) => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = from + (to - from) * easeOutQuart;
      
      // Show both short and full format
      const shortFormat = `$${currentValue.toFixed(2)}T`;
      const fullNumber = (currentValue * 1000000000000).toLocaleString('en-US', {
        maximumFractionDigits: 0
      });
      
      setDisplayValue(shortFormat);
      if (showFullNumber) {
        setFullNumberValue(`$${fullNumber}`);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const animateRanking = (from: number, to: number) => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(from + (to - from) * easeOutQuart);
      
      if (metric === "#1") {
        setDisplayValue(`#${currentValue}`);
      } else if (metric === "Top 4") {
        setDisplayValue(`Top ${currentValue}`);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const animatePercentage = (from: number, to: number) => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(from + (to - from) * easeOutQuart);
      
      setDisplayValue(`${currentValue}%`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const animateRatio = (from: number, to: number) => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ((duration + 1) * 1000), 1); // Slower animation
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      // Animate the first number (counting down from 3 to 1)
      const firstNumber = Math.round(from + (to - from) * easeOutQuart);
      
      // Animate the second number (counting up from 50k to 100k)
      const secondNumberStart = 50;
      const secondNumberEnd = 100;
      const secondNumber = Math.round(secondNumberStart + (secondNumberEnd - secondNumberStart) * easeOutQuart);
      
      setDisplayValue(`${firstNumber}:${secondNumber}k`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const animateThousands = (from: number, to: number) => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(from + (to - from) * easeOutQuart);
      
      setDisplayValue(`${currentValue}k+`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <motion.div
      ref={ref}
      className={`text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="text-center">
        <div>{displayValue || metric}</div>
        {fullNumberValue && (
          <div className="text-xs text-muted-foreground font-light mt-1 opacity-70">
            {fullNumberValue}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
