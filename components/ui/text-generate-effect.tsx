'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsArray = words.split(' ');

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const spans = containerRef.current!.querySelectorAll('span');
      gsap.fromTo(
        spans,
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 0.2, ease: 'power1.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="tracking-wide" ref={containerRef}>
          {wordsArray.map((word, idx) => (
            <span key={word + idx} className="opacity-0">
              {word}{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
