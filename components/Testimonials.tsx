'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

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
      <figure
        className={cn(
          "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
          "border-babu-accent-2/20 bg-babu-accent-2/10 hover:bg-babu-accent-2/20",
        )}
      >
        <div className="flex flex-row items-center gap-3 mb-4">
          <img className="rounded-full w-12 h-12 object-cover" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/60">{username}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {renderStars(rating)}
        </div>
        <blockquote className="text-sm text-white/90 leading-relaxed">{body}</blockquote>
      </figure>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-6xl font-serif font-extrabold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto tracking-wider">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience at BA-BU Family Salon.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-babu-primary"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-babu-primary"></div>
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
    </section>
  );
};

export default Testimonials;