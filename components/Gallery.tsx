'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const Gallery = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#77530a] to-[#ffd277] mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Take a glimpse into our luxurious salon environment and see the beautiful transformations we create every day.
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {galleryCards.map((card) => {
            return <GalleryCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface GalleryCardProps {
  card: {
    id: number;
    url: string;
    title: string;
    description: string;
  };
}

const GalleryCard = ({ card }: GalleryCardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-xl shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={card.url}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <h3 className="text-3xl font-bold text-white mb-2">
          {card.title}
        </h3>
        <p className="text-white/90 text-sm">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default Gallery;

// Gallery data with salon-specific content
const galleryCards = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Hair Styling",
    description: "Professional hair styling and cutting services"
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Hair Coloring",
    description: "Expert hair coloring and highlighting techniques"
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Hair Treatments",
    description: "Nourishing hair treatments and deep conditioning"
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/3993465/pexels-photo-3993465.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Bridal Services",
    description: "Special bridal hair and makeup packages"
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Hair Extensions",
    description: "Professional hair extension services"
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3993463/pexels-photo-3993463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Hair Care",
    description: "Complete hair care and maintenance services"
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Styling Consultation",
    description: "Personalized styling consultations and advice"
  },
];