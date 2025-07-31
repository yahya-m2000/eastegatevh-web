'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../core/utils/cn';
import { LoadingDots } from './loading-dots';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  sizes,
  placeholder = 'empty',
  blurDataURL,
  quality = 85,
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-muted flex items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LoadingDots size="sm" color="muted" />
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          quality={quality}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-all duration-300",
            fill ? "object-cover" : "",
            className
          )}
        />
      </motion.div>
    </div>
  );
}