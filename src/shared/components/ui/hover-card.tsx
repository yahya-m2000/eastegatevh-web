'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../../core/utils/cn';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
  shadowIntensity?: 'none' | 'light' | 'medium' | 'strong';
  glowEffect?: boolean;
}

export function HoverCard({
  children,
  className,
  hoverScale = 1.02,
  hoverY = -5,
  shadowIntensity = 'medium',
  glowEffect = false,
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const shadowClasses = {
    none: '',
    light: 'hover:shadow-sm',
    medium: 'hover:shadow-lg hover:shadow-black/5',
    strong: 'hover:shadow-xl hover:shadow-black/10',
  };

  const glowClass = glowEffect ? 'hover:shadow-primary/20' : '';

  return (
    <motion.div
      className={cn(
        "transition-all duration-300 cursor-pointer",
        shadowClasses[shadowIntensity],
        glowClass,
        className
      )}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
}