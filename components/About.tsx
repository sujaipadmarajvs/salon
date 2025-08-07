'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, Users, Clock, Star } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { TextGenerateEffect } from './ui/text-generate-effect';
import CountUp from './CountUp';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Service Support' },
    { icon: Star, number: '4.8', label: 'Average Rating' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              About BA-BU Family Salon
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#77530a] to-[#ffd277] mb-6"></div>
            
            <div className="text-lg text-white mb-6 leading-relaxed">
              <TextGenerateEffect words="Welcome to BA-BU Family Salon, where luxury meets expertise in the heart of North Paravur, Kerala. For over 15 years, we have been the premier destination for families seeking exceptional beauty and grooming services." />
            </div>
            
            <div className="text-lg text-white mb-8 leading-relaxed">
              <TextGenerateEffect words="Our team of skilled professionals is dedicated to providing personalized care using the finest products and latest techniques. From traditional treatments to modern styling, we ensure every visit is a luxurious experience that leaves you feeling confident and beautiful." />
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#77530a] to-[#ffd277] rounded-full"></div>
                <span className="text-white">Expert Stylists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#77530a] to-[#ffd277] rounded-full"></div>
                <span className="text-white">Premium Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#77530a] to-[#ffd277] rounded-full"></div>
                <span className="text-white">Hygienic Environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#77530a] to-[#ffd277] rounded-full"></div>
                <span className="text-white">Family Friendly</span>
              </div>
            </div>

            {/* CTA */}
            <AnimatedButton
              text="Book Your Appointment"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>

          {/* Image */}
          <div className="fade-in-section">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-babu-accent-2 rounded-lg -z-10"></div>
              <Image
                src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="BA-BU Salon Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="fade-in-section text-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#77530a] to-[#ffd277] text-white rounded-full mb-4 hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-[#77530a] to-[#ffd277] bg-clip-text mb-2 hover:scale-105 transition-transform duration-300">
                  {stat.number === '24/7' ? (
                    <span className="hover-shine">24/7</span>
                  ) : stat.number === '4.8' ? (
                    <span className="hover-shine">4.8</span>
                  ) : (
                    <CountUp end={parseInt(stat.number.replace(/\D/g, ''))} suffix={stat.number.replace(/\d/g, '')} />
                  )}
                </div>
                <div className="text-white text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;