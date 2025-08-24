import { useEffect, useRef, useCallback } from 'react';

interface UseScrollOptimizationOptions {
  throttleMs?: number;
  passive?: boolean;
}

export const useScrollOptimization = (options: UseScrollOptimizationOptions = {}) => {
  const { throttleMs = 16, passive = true } = options;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTime = useRef(0);

  const throttledScrollHandler = useCallback((handler: () => void) => {
    const now = Date.now();

    if (now - lastScrollTime.current >= throttleMs) {
      handler();
      lastScrollTime.current = now;
    } else if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        handler();
        lastScrollTime.current = Date.now();
        timeoutRef.current = null;
      }, throttleMs - (now - lastScrollTime.current));
    }
  }, [throttleMs]);

  const addScrollListener = useCallback((
    element: HTMLElement | Window,
    handler: () => void
  ) => {
    const throttledHandler = () => throttledScrollHandler(handler);

    element.addEventListener('scroll', throttledHandler, { passive });

    return () => {
      element.removeEventListener('scroll', throttledHandler);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [throttledScrollHandler, passive]);

  const addResizeListener = useCallback((
    element: HTMLElement | Window,
    handler: () => void
  ) => {
    const throttledHandler = () => throttledScrollHandler(handler);

    element.addEventListener('resize', throttledHandler, { passive });

    return () => {
      element.removeEventListener('resize', throttledHandler);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [throttledScrollHandler, passive]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return {
    addScrollListener,
    addResizeListener,
    throttledScrollHandler,
  };
};
