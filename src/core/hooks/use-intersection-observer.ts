'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLElement>, UseIntersectionObserverReturn] {
  const {
    threshold = 0,
    rootMargin = '0px',
    root = null,
    triggerOnce = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!targetRef.current || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [observerEntry] = entries;
        setEntry(observerEntry);
        
        const intersecting = observerEntry.isIntersecting;
        setIsIntersecting(intersecting);
        
        if (intersecting && triggerOnce && !hasTriggered) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, triggerOnce, hasTriggered]);

  return [targetRef, { isIntersecting, entry }];
}