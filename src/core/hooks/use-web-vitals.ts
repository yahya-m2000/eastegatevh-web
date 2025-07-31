'use client';

import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

export function useWebVitals() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const sendToAnalytics = (metric: WebVitalsMetric) => {
      // Log to console in development
      console.log('Web Vital:', metric);
      
      // In production, you would send this to your analytics service
      // Example: analytics.track('web-vital', metric);
    };

    // Dynamically import web-vitals to avoid bundling in development
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(sendToAnalytics);
      onFID(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, []);
}