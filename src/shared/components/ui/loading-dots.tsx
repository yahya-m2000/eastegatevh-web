'use client';

import { motion } from 'framer-motion';
import { cn } from '../../../core/utils/cn';

interface LoadingDotsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'muted';
}

export function LoadingDots({ 
  className, 
  size = 'md',
  color = 'primary' 
}: LoadingDotsProps) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    muted: 'bg-muted-foreground',
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex items-center space-x-1", className)}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            "rounded-full",
            sizeClasses[size],
            colorClasses[color]
          )}
          variants={dotVariants}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}