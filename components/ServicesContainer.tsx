"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger, Flip);

interface ServicesContainerProps {
    className?: string;
}

const ServicesContainer = ({ className }: ServicesContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const hero = heroRef.current;
        if (!container || !hero) return;

        // Wait for next tick to ensure DOM is fully rendered
        const timeoutId = setTimeout(() => {
            const heroBg = hero.querySelector('.hero-background');
            const heroContent = hero.querySelector('.hero-content');

            if (heroBg) {
                gsap.to(heroBg, {
                    y: "30%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: hero,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            if (heroContent) {
                gsap.to(heroContent, {
                    y: "-15%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: hero,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        }, 100);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            clearTimeout(timeoutId);
        };
    }, []);

    const serviceSections = [
        {
            id: 'weddings',
            title: 'Wedding Services',
            backgroundImage: '/images/jonathan-borba-qJ2mhxmateo-unsplash.jpg',
        },
        {
            id: 'hair-care',
            title: 'Hair Care Services',
            backgroundImage: '/images/engin-akyurt-35NAaB_Nmx8-unsplash.jpg',
        },
        {
            id: 'skin-body-care',
            title: 'Skin & Body Care',
            backgroundImage: '/images/baylee-gramling-a3xr2mVjT5M-unsplash.jpg',
        }
    ];

    const handleServiceClick = async (serviceId: string) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setSelectedService(serviceId);

        // Find the clicked service section
        const serviceSection = serviceSections.find(s => s.id === serviceId);
        if (!serviceSection) return;

        // Get the clicked element
        const clickedElement = document.querySelector(`[data-service-id="${serviceId}"]`);
        if (!clickedElement) return;

        // Hide all content in the clicked section first
        const contentElements = clickedElement.querySelectorAll('.service-content, .service-title, .service-button');
        gsap.to(contentElements, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.inOut'
        });

        // Create a temporary overlay element for the transition
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundImage = `url(${serviceSection.backgroundImage})`;
        overlay.style.backgroundSize = 'cover';
        overlay.style.backgroundPosition = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1.2s ease-in-out';

        document.body.appendChild(overlay);

        // Use GSAP Flip for smooth transition
        const state = Flip.getState(clickedElement);

        // Animate the clicked element to full viewport
        gsap.to(clickedElement, {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 10000,
            duration: .6,
            ease: 'power2.inOut',
            onComplete: () => {
                // Fade in the overlay smoothly
                gsap.to(overlay, {
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // Wait for transition to complete, then navigate
                        setTimeout(() => {
                            document.body.removeChild(overlay);
                            window.location.href = `/services/${serviceId}`;
                        }, 300);
                    }
                });
            }
        });

        // Fade out other sections smoothly
        const otherSections = document.querySelectorAll(`[data-service-id]:not([data-service-id="${serviceId}"])`);
        gsap.to(otherSections, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
        });

        // Add a subtle scale effect to the clicked element during transition
        // gsap.to(clickedElement, {
        //     scale: 1.05,
        //     duration: 0.8,
        //     ease: 'power2.out',
        //     yoyo: true,
        //     repeat: 1
        // });
    };

    return (
        <div ref={containerRef} className={`w-screen bg-primary ${className || ""}`}>
            {/* Hero Section with Three Equal Service Sections */}
            <section
                ref={heroRef}
                className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Services Grid - Three Equal Sections */}
                <div className="services-grid flex w-full h-full">
                    {serviceSections.map((section, index) => {
                        return (
                            <div
                                key={section.id}
                                data-service-id={section.id}
                                className="relative flex-1 h-full cursor-pointer group transition-all duration-700 ease-in-out hover:flex-[1.5] overflow-hidden"
                                onClick={() => handleServiceClick(section.id)}
                            >
                                {/* Individual Background Image for Each Section */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${section.backgroundImage})` }}
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700" />

                                {/* Content Overlay */}
                                <div className="service-content relative z-9 h-full flex flex-col justify-center items-center text-center p-6">
                                    <h3 className="service-title text-3xl font-gunteerz font-extrabold text-white mb-4 transition-all duration-700 group-hover:text-5xl tracking-wide drop-shadow-lg">
                                        {section.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ServicesContainer;
