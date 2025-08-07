'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          i < rating ? 'text-babu-accent-2 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  const ReviewCard = ({
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
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:border-babu-accent-2/30">
        <div className="flex items-start gap-4 mb-4">
          <img 
            className="rounded-full w-12 h-12 object-cover border-2 border-babu-accent-2/20" 
            alt={name} 
            src={img} 
          />
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">{name}</h4>
            <p className="text-gray-400 text-xs">{username}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {renderStars(rating)}
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
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
          <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
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
              >
                {column.map((review, index) => (
                  <ReviewCard key={`${colIndex}-${index}`} {...review} />
                ))}
                {/* Duplicate cards for seamless loop */}
                {column.map((review, index) => (
                  <ReviewCard key={`${colIndex}-${index}-duplicate`} {...review} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-babu-accent-2/20 border border-babu-accent-2/30 text-white px-6 py-3 rounded-full">
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