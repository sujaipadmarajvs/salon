import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function splitTextPreserveMarkup(element: HTMLElement) {
  if (element.getAttribute('data-split') === 'true') return;

  const originalText = element.textContent || '';
  element.setAttribute('aria-label', originalText);
  element.setAttribute('data-split', 'true');
  element.setAttribute('role', 'text');

  const processNode = (node: ChildNode): ChildNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      const frag = document.createDocumentFragment();
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        const span = document.createElement('span');
        span.className = 'char inline-block will-change-transform';
        span.setAttribute('aria-hidden', 'true');
        // Preserve spaces
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        frag.appendChild(span);
      }
      return frag as unknown as ChildNode;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const clone = el.cloneNode(false) as HTMLElement;
      el.childNodes.forEach((child) => clone.appendChild(processNode(child)));
      return clone;
    }
    return node;
  };

  const children = Array.from(element.childNodes);
  const newFrag = document.createDocumentFragment();
  children.forEach((child) => newFrag.appendChild(processNode(child)));
  element.textContent = '';
  element.appendChild(newFrag);
}

export function useSplitHeaders(rootRef?: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef?.current ?? document.documentElement;
    const headers = Array.from(
      root.querySelectorAll<HTMLElement>('.split-header')
    );
    headers.forEach((el) => {
      splitTextPreserveMarkup(el);
      const chars = el.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { yPercent: 120, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.02,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [rootRef?.current]);
}


