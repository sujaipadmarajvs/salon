'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import ShinyText from './ShinyText';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const videos = [
    '/hero1.mp4',
    '/hero2.mp4',
    '/hero3.mp4'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Auto-advance videos every 8 seconds
    intervalRef.current = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [videos.length]);

  useEffect(() => {
    // Play the current video and pause others
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        if (index === currentVideoIndex) {
          videoRef.play().catch(console.error);
        } else {
          videoRef.pause();
          videoRef.currentTime = 0;
        }
      }
    });
  }, [currentVideoIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Carousel */}
      <div className="absolute inset-0 z-0">
        {videos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => (videoRefs.current[index] = el)}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
        
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>



      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <ShinyText text={siteConfig.tagline} disabled={false} speed={3} className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold" />
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-xl sm:text-2xl mb-4 text-babu-accent-2 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Premium Family Salon Experience
          </p>
          
          {/* Location */}
          <p 
            className={`text-lg mb-8 text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            North Paravur, Kerala
          </p>
          
          {/* CTA Button */}
          <div 
            className={`flex justify-center transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <AnimatedButton
              text={siteConfig.hero.ctaText}
              onClick={scrollToContact}
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;