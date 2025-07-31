// Performance optimization utilities

/**
 * Debounce function to limit the rate of function calls
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit the rate of function calls
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get device performance tier based on device capabilities
 */
export function getPerformanceTier(): 'low' | 'medium' | 'high' {
  if (typeof window === 'undefined') return 'medium';
  
  const connection = (navigator as any).connection;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const memory = (performance as any).memory?.usedJSHeapSize || 0;
  
  // Low-end device indicators
  if (
    hardwareConcurrency <= 2 ||
    connection?.effectiveType === 'slow-2g' ||
    connection?.effectiveType === '2g' ||
    memory > 100000000 // 100MB heap usage
  ) {
    return 'low';
  }
  
  // High-end device indicators
  if (
    hardwareConcurrency >= 8 ||
    connection?.effectiveType === '4g' ||
    connection?.downlink >= 10
  ) {
    return 'high';
  }
  
  return 'medium';
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string, type?: string): void {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  
  document.head.appendChild(link);
}

/**
 * Prefetch resources for future navigation
 */
export function prefetchResource(href: string): void {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  
  document.head.appendChild(link);
}

/**
 * Measure and log performance metrics
 */
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof performance === 'undefined') {
    fn();
    return;
  }
  
  const start = performance.now();
  fn();
  const end = performance.now();
  
  console.log(`${name} took ${end - start} milliseconds`);
}

/**
 * Create optimized sizes attribute for responsive images
 */
export function generateImageSizes(breakpoints: Record<string, number>): string {
  const sizes = Object.entries(breakpoints)
    .sort(([, a], [, b]) => b - a) // Sort by breakpoint size descending
    .map(([size, width]) => {
      if (size === 'default') return `${width}px`;
      return `(min-width: ${size}) ${width}px`;
    });
  
  return sizes.join(', ');
}

/**
 * Check if intersection observer is supported
 */
export function supportsIntersectionObserver(): boolean {
  return typeof window !== 'undefined' && 'IntersectionObserver' in window;
}

/**
 * Check if web vitals should be measured
 */
export function shouldMeasureWebVitals(): boolean {
  return typeof window !== 'undefined' && process.env.NODE_ENV === 'production';
}