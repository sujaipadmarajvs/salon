'use client';

import { useRef } from 'react';
import OptimizedImage from './optimized-image';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface OptimizedGalleryProps {
  images: GalleryImage[];
  title: string;
  description: string;
  className?: string;
}

const OptimizedGallery = ({
  images,
  title,
  description,
  className,
}: OptimizedGalleryProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={galleryRef} className={`py-20 bg-white ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-4xl lg:text-5xl font-gunteerz font-black text-black mb-6">
            {title}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="w-full h-80 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.title || `Style ${index + 1}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedGallery;
