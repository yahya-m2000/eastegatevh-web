'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePerformance } from '../../../core/hooks/use-performance';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  className 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const { enableAnimations, tier } = usePerformance();
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Adjust duration based on performance tier
  const adjustedDuration = tier === 'low' ? duration * 0.5 : duration;

  useEffect(() => {
    if (!isInView) return;

    // If animations are disabled, just set the final value
    if (!enableAnimations) {
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (adjustedDuration * 1000), 1);
      
      // Use simpler easing for low-performance devices
      const easing = tier === 'low' 
        ? progress // Linear
        : 1 - Math.pow(1 - progress, 4); // easeOutQuart
      
      const currentCount = Math.floor(easing * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, adjustedDuration, isInView, enableAnimations, tier]);

  const content = `${prefix}${count}${suffix}`;

  // If animations are disabled, render without motion wrapper
  if (!enableAnimations) {
    return <span ref={ref} className={className}>{content}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: tier === 'low' ? 10 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.span>
  );
}