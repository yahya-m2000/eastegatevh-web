'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../core/utils/cn';

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
  onVisible?: () => void;
  once?: boolean;
}

export function LazyLoad({
  children,
  className,
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  onVisible,
  once = true,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        
        if (visible) {
          setIsVisible(true);
          if (!hasBeenVisible) {
            setHasBeenVisible(true);
            onVisible?.();
          }
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, onVisible, once, hasBeenVisible]);

  const shouldRender = once ? hasBeenVisible : isVisible;

  return (
    <div ref={ref} className={cn("min-h-[1px]", className)}>
      {shouldRender ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || <div className="h-48 bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  );
}