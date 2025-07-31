'use client';

import { ReactNode } from 'react';
import { useWebVitals } from '../hooks/use-web-vitals';

interface PerformanceProviderProps {
  children: ReactNode;
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  useWebVitals();
  
  return <>{children}</>;
}