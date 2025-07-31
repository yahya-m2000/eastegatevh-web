'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { usePerformance } from '../../../core/hooks/use-performance';
import { cn } from '../../../core/utils/cn';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  threshold = 0.1,
  rootMargin = "-100px",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const { enableAnimations, tier } = usePerformance();

  const isInView = useInView(ref, { 
    once, 
    margin: rootMargin,
    amount: threshold 
  });

  // Adjust animation complexity based on performance tier
  const adjustedDuration = tier === 'low' ? 0.4 : 0.8;
  const easing = tier === 'low' ? 'easeOut' : [0.21, 0.47, 0.32, 0.98];

  // If animations are disabled, just render children without motion
  if (!enableAnimations) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: tier === 'low' ? 25 : 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: adjustedDuration,
        ease: easing,
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxScroll({ 
  children, 
  offset = 50, 
  className 
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { enableParallax, tier } = usePerformance();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Reduce parallax effect for lower performance devices
  const adjustedOffset = tier === 'low' ? offset * 0.3 : offset;
  const y = useTransform(scrollYProgress, [0, 1], [adjustedOffset, -adjustedOffset]);

  // If parallax is disabled, just render children without motion
  if (!enableParallax) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}