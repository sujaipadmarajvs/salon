'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, Users, Clock, Star } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import CountUp from './CountUp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // GSAP Animations for scroll-based triggers
  useEffect(() => {
    const section = sectionRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (section && image1 && image2 && content && stats) {
      // Parallax for images on scroll
      gsap.to(image1, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(image2, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content and stats animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      timeline
        .from(content.children, {
          x: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        })
        .from(stats.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }, '-=0.5');
    }
  }, []);

  // Interactive mouse-move parallax effect
  useEffect(() => {
    const section = sectionRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;

    if (!section || !image1 || !image2) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = section.getBoundingClientRect();
      
      const x = clientX - left;
      const y = clientY - top;

      const xPercent = x / width - 0.5;
      const yPercent = y / height - 0.5;

      const xPos = xPercent * 30; // 30px max move
      const yPos = yPercent * 30;

      gsap.to(image1, {
        x: -xPos,
        y: -yPos,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      gsap.to(image2, {
        x: xPos,
        y: yPos,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
        gsap.to([image1, image2], {
            x: 0,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        });
    };

    section.addEventListener('mousemove', handleMouseMove as EventListener);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove as EventListener);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Service Support' },
    { icon: Star, number: '4.8', label: 'Average Rating' },
  ];

  return (
      <section
          id="about"
          ref={sectionRef}
          className="py-24 bg-primary overflow-hidden"
      >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Image Column */}
                  <div className="relative h-[500px] lg:h-[600px]">
                      <div
                          ref={image1Ref}
                          className="absolute top-0 left-0 w-3/5 h-3/4"
                      >
                          <Image
                              src="/images/about-img-1.jpg"
                              alt="BA-BU Salon Interior 1"
                              width={400}
                              height={600}
                              className="rounded-lg shadow-2xl object-cover w-full h-full"
                          />
                      </div>
                      <div
                          ref={image2Ref}
                          className="absolute bottom-0 right-0 w-3/5 h-3/4"
                      >
                          <Image
                              src="/images/about-img-2.jpg"
                              alt="BA-BU Salon Interior 2"
                              width={400}
                              height={600}
                              className="rounded-lg shadow-2xl object-cover w-full h-full"
                          />
                      </div>
                  </div>

                  {/* Content Column */}
                  <div ref={contentRef}>
                      <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-sans">
                          About <span className="text-gold text-5xl lg:text-6xl font-[900] font-sans">BA-BU</span> Family Saloon
                      </h2>
                      <div className="w-24 h-1 bg-gold mb-6"></div>

                      <p className="text-lg text-gray-300 mb-6 leading-relaxed tracking-wider">
                          Welcome to BA-BU Family Salon, where luxury meets
                          expertise in the heart of North Paravur. For over 15
                          years, we have been the premier destination for
                          families seeking exceptional beauty and grooming
                          services.
                      </p>

                      <p className="text-lg text-gray-300 mb-8 leading-relaxed tracking-wider">
                          Our team of skilled professionals is dedicated to
                          providing personalized care using the finest products
                          and latest techniques. We ensure every visit is a
                          luxurious experience that leaves you feeling confident
                          and beautiful.
                      </p>

                      {/* Stats Section */}
                      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
                        {stats.map((stat, index) => (
                          <div key={index} className="text-center transition-transform duration-300 ease-in-out hover:scale-110">
                            <div className="flex justify-center mb-2">
                              <stat.icon className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="text-4xl font-bold text-white">
                              {stat.label === 'Service Support' ? (
                                stat.number
                              ) : (
                                <>
                                  <CountUp end={parseFloat(stat.number)} duration={3} decimals={stat.number.includes('.') ? 1 : 0} />
                                  {stat.number.includes('+') && '+'}
                                </>
                              )}
                            </h3>
                            <p className="text-gray-400 mt-1">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <AnimatedButton
                          text="Book Your Appointment"
                          onClick={() => {
                              const contactSection =
                                  document.getElementById("contact");
                              if (contactSection) {
                                  contactSection.scrollIntoView({
                                      behavior: "smooth",
                                  });
                              }
                          }}
                      />
                  </div>
              </div>
          </div>
      </section>
  );
};

export default About;