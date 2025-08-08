'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleColumnMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const columnElement = event.currentTarget as HTMLElement;
    columnElement.style.animationPlayState = 'paused';
  };

  const handleColumnMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const columnElement = event.currentTarget as HTMLElement;
    columnElement.style.animationPlayState = 'running';
  };

  // Extended testimonials with more realistic data
  const reviews = [
    {
      name: "Priya Nair",
      username: "@priya_nair",
      body: "Amazing service! The staff is so professional and the ambiance is perfect. My bridal makeup was absolutely stunning!",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      username: "@rajesh_kumar",
      body: "Best salon in North Paravur. Highly recommend their bridal packages! The team made my wife look like a princess.",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Meera Joseph",
      username: "@meera_joseph",
      body: "Love the new look! Will definitely come back for more treatments. The facial was incredibly relaxing.",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Anjali Menon",
      username: "@anjali_menon",
      body: "The bridal package was absolutely perfect! The team made me feel like a princess on my special day.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Suresh Nair",
      username: "@suresh_nair",
      body: "Great service for men's grooming. The staff is professional and the ambiance is very relaxing.",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Lakshmi Pillai",
      username: "@lakshmi_pillai",
      body: "Amazing facial treatments! My skin has never looked better. The products they use are top quality.",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Vijay Thomas",
      username: "@vijay_thomas",
      body: "Excellent hair styling service! The stylist understood exactly what I wanted and delivered beyond expectations.",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Divya Suresh",
      username: "@divya_suresh",
      body: "The spa treatment was heavenly! Very professional staff and clean environment. Highly recommended!",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Kavya Menon",
      username: "@kavya_menon",
      body: "The bridal makeup was beyond my expectations! The team made me feel like a queen on my special day.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Arun Kumar",
      username: "@arun_kumar",
      body: "Best hair styling experience! The stylist was very professional and the results were amazing.",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Sneha Pillai",
      username: "@sneha_pillai",
      body: "The facial treatment was incredible! My skin feels so refreshed and glowing. Will definitely return!",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Rahul Nair",
      username: "@rahul_nair",
      body: "Excellent men's grooming service! The staff is very professional and the environment is clean.",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  const TestimonialCard = ({
    img,
    name,
    username,
    body,
    rating,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    rating: number;
  }) => {
    return (
              <div className="relative p-6 rounded-2xl border transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-amber-400/70 bg-gray-900/50 backdrop-blur-sm border-gray-700/50 group">
        {/* Glow effect overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/30 to-yellow-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-lg"></div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Quote text */}
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            "{body}"
          </p>

          {/* Author section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={img}
                alt={name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400/30 group-hover:ring-amber-400/70 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h4 className="font-semibold text-white">{name}</h4>
              <p className="text-sm text-gray-400">{username}</p>
              <div className="flex mt-1">
                {renderStars(rating)}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
        </div>
        {/* Additional golden accent */}
        <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        </div>
      </div>
    );
  };

  // Create multiple columns for infinity scroll effect
  const createColumns = () => {
    const columns = 3;
    const columnData = Array.from({ length: columns }, (_, colIndex) => {
      return reviews.filter((_, index) => index % columns === colIndex);
    });
    return columnData;
  };

  const columns = createColumns();

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Loved by our clients
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience at BA-BU Family Salon.
          </p>
        </div>

        {/* Infinity Scrolling Testimonials */}
        <div className="relative w-full">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>

          {/* Testimonials Grid */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden w-full"
          >
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex flex-col gap-6 ${
                  colIndex === 1 ? 'animate-scroll-up' : 'animate-scroll-down'
                }`}
                style={{
                  animationDelay: `${colIndex * 2}s`,
                  animationDuration: '30s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear'
                }}
                onMouseEnter={handleColumnMouseEnter}
                onMouseLeave={handleColumnMouseLeave}
              >
                {column.map((review, index) => (
                  <TestimonialCard key={`${colIndex}-${index}`} {...review} />
                ))}
                {/* Duplicate cards for seamless loop */}
                {column.map((review, index) => (
                  <TestimonialCard key={`${colIndex}-${index}-duplicate`} {...review} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/30 to-yellow-400/20 border border-amber-400/40 text-white px-6 py-3 rounded-full">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="font-semibold">4.9/5 on Google Reviews</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;