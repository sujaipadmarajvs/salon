'use client';

import { siteConfig } from "@/config/site";
import { Sparkles, Scissors, Palette, Droplets, HandHeart, Footprints } from "lucide-react";
import OptimizedHero from "@/components/ui/optimized-hero";
import OptimizedSectionHero from "@/components/ui/optimized-section-hero";
import OptimizedGallery from "@/components/ui/optimized-gallery";
import OptimizedPricing from "@/components/ui/optimized-pricing";
import { serviceData } from "@/data/serviceImages";

const SkinBodyCareServicePage = () => {
  return (
    <>
      <div className="sr-only">
        <h1>BA-BU Family Salon - Skin & Body Care Services</h1>
        <p>Professional skincare, body treatments, and wellness services for all skin types and concerns.</p>
      </div>

      <OptimizedHero
        title="Skin & Body Care"
        subtitle="Rejuvenating Treatments & Wellness"
        backgroundImage="/images/baylee-gramling-a3xr2mVjT5M-unsplash.jpg"
      />

      <section className="cleanup-section">
        <OptimizedSectionHero
          title="Cleanup & Detan"
          description="Professional facial cleanup and tan removal treatments for glowing, healthy skin."
        />
        <OptimizedGallery
          images={serviceData.cleanup.galleryImages}
          title="Our Cleanup Styles"
          description="Browse through our collection of effective cleanup treatments"
        />
        <OptimizedPricing
          services={serviceData.cleanup.services}
          title="Cleanup Pricing"
          description="Transparent pricing for all our cleanup services"
        />
      </section>

      <section className="threading-section">
        <OptimizedSectionHero
          title="Threading & Shaping"
          description="Precise eyebrow threading and facial hair removal for perfect shaping and definition."
        />
        <OptimizedGallery
          images={serviceData.threading.galleryImages}
          title="Our Threading Styles"
          description="Explore our collection of precise threading techniques"
        />
        <OptimizedPricing
          services={serviceData.threading.services}
          title="Threading Pricing"
          description="Affordable pricing for all our threading services"
        />
      </section>

      <section className="bleaching-section">
        <OptimizedSectionHero
          title="Bleaching & Lightening"
          description="Professional skin lightening and bleaching treatments for even skin tone."
        />
        <OptimizedGallery
          images={serviceData.bleaching.galleryImages}
          title="Our Bleaching Styles"
          description="Browse through our collection of skin lightening treatments"
        />
        <OptimizedPricing
          services={serviceData.bleaching.services}
          title="Bleaching Pricing"
          description="Competitive pricing for all our bleaching services"
        />
      </section>

      <section className="waxing-section">
        <OptimizedSectionHero
          title="Waxing & Hair Removal"
          description="Professional waxing services for smooth, hair-free skin with long-lasting results."
        />
        <OptimizedGallery
          images={serviceData.waxing.galleryImages}
          title="Our Waxing Styles"
          description="Explore our collection of effective hair removal treatments"
        />
        <OptimizedPricing
          services={serviceData.waxing.services}
          title="Waxing Pricing"
          description="Transparent pricing for all our waxing services"
        />
      </section>

      <section className="facials-section">
        <OptimizedSectionHero
          title="Facial Treatments"
          description="Rejuvenating facial treatments for all skin types and concerns."
        />
        <OptimizedGallery
          images={serviceData.facials.galleryImages}
          title="Our Facial Styles"
          description="Browse through our collection of rejuvenating facial treatments"
        />
        <OptimizedPricing
          services={serviceData.facials.services}
          title="Facial Pricing"
          description="Competitive pricing for all our facial services"
        />
      </section>

      <section className="massages-section">
        <OptimizedSectionHero
          title="Body Massages"
          description="Relaxing body massages and wellness treatments for ultimate relaxation."
        />
        <OptimizedGallery
          images={serviceData.massages.galleryImages}
          title="Our Massage Styles"
          description="Explore our collection of relaxing massage treatments"
        />
        <OptimizedPricing
          services={serviceData.massages.services}
          title="Massage Pricing"
          description="Transparent pricing for all our massage services"
        />
      </section>

      <section className="pedicure-section">
        <OptimizedSectionHero
          title="Nail Care & Pedicure"
          description="Professional nail care and pedicure services for beautiful, healthy feet."
        />
        <OptimizedGallery
          images={serviceData.pedicure.galleryImages}
          title="Our Nail Care Styles"
          description="Browse through our collection of nail care treatments"
        />
        <OptimizedPricing
          services={serviceData.pedicure.services}
          title="Nail Care Pricing"
          description="Competitive pricing for all our nail care services"
        />
      </section>
    </>
  );
};

export default SkinBodyCareServicePage;
