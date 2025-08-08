"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3993465/pexels-photo-3993465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3993463/pexels-photo-3993463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const gridSizes = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const component = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".gallery-image-item");
      images.forEach((image: any) => {
        gsap.from(image, {
          opacity: 0,
          scale: 0.9,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setIsModalOpen(false);
        setSelectedImage(null);
      },
    });
  };

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.in" });
  };

  return (
    <section id="gallery-section" ref={component} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="gallery-header" className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-sans font-extrabold text-white mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-yellow-300 mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto tracking-wider">
            A glimpse into our world of style, luxury, and transformation.
          </p>
        </div>

        <div
          id="gallery-grid"
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4"
        >
          {galleryImages.map((image, index) => (
            <div
              key={image}
              id={`gallery-item-${index}`}
              className={`${gridSizes[index % gridSizes.length]} gallery-image-item relative rounded-lg overflow-hidden cursor-pointer group`}
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
              onClick={() => openModal(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                className="object-cover"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div
          id="gallery-modal"
          ref={modalRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button
              id="gallery-modal-close-button"
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
