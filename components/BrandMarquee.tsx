"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const brands = [
  "/images/brands/img1.png",
  "/images/brands/img2.png",
  "/images/brands/img3.png",
  "/images/brands/img4.png",
  "/images/brands/img5.png",
  "/images/brands/img6.png",
];

const BrandMarquee = () => {
  return (
    <section
      id="brand-marquee-section"
      className="py-12 bg-black my-12 lg:my-24"
      aria-label="Our trusted brands"
    >
      <div className="w-full flex flex-col items-center justify-center gap-12">
        <h2
          id="brand-marquee-heading"
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8"
        >
          Our Trusted Brands
        </h2>

        <div className="relative flex flex-col gap-24">
          <Marquee reverse pauseOnHover className="[--duration:18s] [--gap:3rem]">
            {brands.map((logo, index) => (
              <div
                key={`top-marquee-${index}`}
                className="flex items-center shrink-0"
              >
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={240}
                  height={120}
                  className="block h-16 md:h-20 lg:h-24 w-auto object-contain mx-8"
                />
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover className="[--duration:18s] [--gap:3rem]">
            {brands.map((logo, index) => (
              <div
                key={`bottom-marquee-${index}`}
                className="flex items-center shrink-0"
              >
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={240}
                  height={120}
                  className="block h-16 md:h-20 lg:h-24 w-auto object-contain mx-8"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
