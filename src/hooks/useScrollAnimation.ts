"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  // IMPORTANT: triggerOnce must be FALSE to allow scroll-up animations
  const { threshold = 0.2, rootMargin = "0px", triggerOnce = false } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // This makes it toggle on AND off
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function getStaggerDelay(index: number, baseDelay = 100): string {
  return `${index * baseDelay}ms`;
}