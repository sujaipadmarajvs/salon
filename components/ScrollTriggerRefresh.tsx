"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollTriggerRefreshProps {
  children: React.ReactNode;
}

const ScrollTriggerRefresh = ({ children }: ScrollTriggerRefreshProps) => {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is ready after route change
    const timer = setTimeout(() => {
      // Refresh all ScrollTrigger instances
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollTriggerRefresh;
