'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { pauseAllVideos } from '@/lib/utils';

gsap.registerPlugin(Flip);

const WorksPage = () => {
  const router = useRouter();
  const weddingRef = useRef<HTMLDivElement>(null);
  const salonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const weddingEl = weddingRef.current;
    const salonEl = salonRef.current;
    const container = containerRef.current;

    if (!weddingEl || !salonEl || !container) return;

    // --- Initial Animation ---
    gsap.fromTo(
      [weddingEl, salonEl],
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    const handleMouseEnter = (el: HTMLDivElement) => {
      const target = el === weddingEl ? weddingEl : salonEl;
      const other = el === weddingEl ? salonEl : weddingEl;

      gsap.to(target, {
        width: '60%',
        duration: 0.7,
        ease: 'power3.inOut'
      });
      gsap.to(other, {
        width: '40%',
        duration: 0.7,
        ease: 'power3.inOut'
      });
    };

    const handleMouseLeave = () => {
      gsap.to([weddingEl, salonEl], {
        width: '50%',
        duration: 0.7,
        ease: 'power3.inOut'
      });
    };

    // --- Desktop Hover Animations ---
    if (window.innerWidth >= 1024) {
      weddingEl.addEventListener('mouseenter', () => handleMouseEnter(weddingEl));
      salonEl.addEventListener('mouseenter', () => handleMouseEnter(salonEl));
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (window.innerWidth >= 1024) {
        weddingEl.removeEventListener('mouseenter', () => handleMouseEnter(weddingEl));
        salonEl.removeEventListener('mouseenter', () => handleMouseEnter(salonEl));
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleNavigation = (path: string, title: string, backgroundImage: string) => {
    const card = title === 'Wedding' ? weddingRef.current : salonRef.current;
    if (!card) return;

    // Get the state of the card
    const state = Flip.getState(card);

    // Move the card to a new container and style it for the transition
    const worksContainer = containerRef.current;
    if (worksContainer) {
      worksContainer.appendChild(card);
    }

    gsap.set(card, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 100,
    });

    // Animate the transition
    Flip.from(state, {
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => {
        const encodedImage = encodeURIComponent(backgroundImage);
        router.push(`${path}?title=${title}&image=${encodedImage}`);
      },
    });
  };

  const Card = ({
    id,
    reference,
    title,
    backgroundImage,
    onClick,
  }: {
    id: string;
    reference: React.RefObject<HTMLDivElement>;
    title: string;
    backgroundImage: string;
    onClick: () => void;
  }) => (
    <div
      id={id}
      ref={reference}
      className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen bg-cover bg-center cursor-pointer group overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={onClick}
    >
      <div
        id={`${id}-overlay`}
        className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-700 lg:group-hover:bg-opacity-20"
      />
      <div
        id={`${id}-content`}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8"
      >
        <h2
          id={`${id}-title`}
          className="text-4xl md:text-6xl font-gunteerz font-black uppercase tracking-wider transform transition-transform duration-700 lg:group-hover:scale-110"
        >
          {title}
        </h2>
        <div
          id={`${id}-link`}
          className="mt-6 border-2 border-secondary px-8 py-3 text-lg font-semibold text-secondary uppercase tracking-widest transition-all duration-500 transform opacity-0 lg:group-hover:opacity-100 lg:group-hover:bg-secondary lg:group-hover:text-primary lg:translate-y-4 lg:group-hover:translate-y-0"
        >
          Explore
        </div>
      </div>
    </div>
  );

  return (
    <>
      <main>
        <div
          id="works-container"
          ref={containerRef}
          className="flex flex-col lg:flex-row w-full min-h-screen bg-primary"
        >
          <Card
            id="works-wedding-card"
            reference={weddingRef}
            title="Wedding"
            backgroundImage="/images/jonathan-borba-qJ2mhxmateo-unsplash.jpg"
            onClick={() => handleNavigation('/works/wedding', 'Wedding', '/images/jonathan-borba-qJ2mhxmateo-unsplash.jpg')}
          />
          <Card
            id="works-salon-card"
            reference={salonRef}
            title="Salon"
            backgroundImage="/images/engin-akyurt-35NAaB_Nmx8-unsplash.jpg"
            onClick={() => handleNavigation('/works/salon', 'Salon', '/images/engin-akyurt-35NAaB_Nmx8-unsplash.jpg')}
          />
        </div>
      </main>
    </>
  );
};

export default WorksPage;