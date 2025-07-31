'use client';

import { useEffect, useState } from 'react';
import { getPerformanceTier, prefersReducedMotion } from '../utils/performance';

interface PerformanceSettings {
  tier: 'low' | 'medium' | 'high';
  reducedMotion: boolean;
  enableAnimations: boolean;
  enableParallax: boolean;
  enableHeavyEffects: boolean;
  imageQuality: number;
}

export function usePerformance(): PerformanceSettings {
  const [settings, setSettings] = useState<PerformanceSettings>({
    tier: 'medium',
    reducedMotion: false,
    enableAnimations: true,
    enableParallax: true,
    enableHeavyEffects: true,
    imageQuality: 85,
  });

  useEffect(() => {
    const tier = getPerformanceTier();
    const reducedMotion = prefersReducedMotion();
    
    setSettings({
      tier,
      reducedMotion,
      enableAnimations: !reducedMotion,
      enableParallax: tier !== 'low' && !reducedMotion,
      enableHeavyEffects: tier === 'high' && !reducedMotion,
      imageQuality: tier === 'low' ? 65 : tier === 'medium' ? 75 : 85,
    });
  }, []);

  return settings;
}