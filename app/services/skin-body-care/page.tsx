'use client';

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { Sparkles, Space as Spa, Star, Clock, Heart, Zap } from "lucide-react";
import { gsap } from "gsap";

const SkinBodyCareServicePage = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    // Set initial state - all content hidden
    gsap.set([
      '.hero-title',
      '.hero-subtitle',
      '.hero-description',
      '.service-card',
      '.facial-card',
      '.package-card',
      '.benefit-card'
    ], {
      opacity: 0,
      y: 50
    });

    // Create timeline for smooth animations with longer delay for page transition
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 1.0 // Longer delay to ensure smooth transition from previous page
    });

    // Hero section animations - start with longer delay
    timeline
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.2 })
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1.2 }, '-=0.8')
      .to('.hero-description', { opacity: 1, y: 0, duration: 1.2 }, '-=0.8');

    // Services section animations
    timeline
      .to('.service-card', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.2
      }, '-=0.4');

    // Facial treatments animations
    timeline
      .to('.facial-card', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15
      }, '-=0.3');

    // Spa packages animations
    timeline
      .to('.package-card', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.2
      }, '-=0.3');

    // Benefits section animations
    timeline
      .to('.benefit-card', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15
      }, '-=0.3');

    return () => {
      timeline.kill();
    };
  }, []);

  const skinServices = [
    {
      id: 1,
      name: "Facial Treatments",
      description: "Rejuvenating facial treatments for all skin types and concerns. From basic cleansing to advanced anti-aging treatments.",
      price: "₹800 - ₹3,000",
      duration: "1-2 hours",
      icon: Sparkles,
      features: [
        "Skin analysis and consultation",
        "Deep cleansing and exfoliation",
        "Customized treatment masks",
        "Moisturizing and protection",
        "Aftercare recommendations"
      ]
    },
    {
      id: 2,
      name: "Spa Services",
      description: "Relaxing spa treatments for ultimate relaxation and wellness. Experience tranquility and rejuvenation.",
      price: "₹1,500 - ₹5,000",
      duration: "1.5-3 hours",
      icon: Spa,
      features: [
        "Full body massage therapy",
        "Aromatherapy treatments",
        "Hot stone therapy",
        "Relaxation techniques",
        "Wellness consultation"
      ]
    },
    {
      id: 3,
      name: "Body Care",
      description: "Comprehensive body care treatments including scrubs, wraps, and therapeutic massages for total body wellness.",
      price: "₹1,000 - ₹4,000",
      duration: "1-2.5 hours",
      icon: Sparkles,
      features: [
        "Body scrubs and exfoliation",
        "Detoxifying body wraps",
        "Therapeutic massages",
        "Skin hydration treatments",
        "Body wellness tips"
      ]
    },
    {
      id: 4,
      name: "Wellness Treatments",
      description: "Holistic wellness treatments combining traditional and modern techniques for mind-body harmony.",
      price: "₹1,200 - ₹4,500",
      duration: "1.5-2.5 hours",
      icon: Heart,
      features: [
        "Stress relief therapies",
        "Energy balancing treatments",
        "Mindfulness sessions",
        "Wellness assessments",
        "Lifestyle guidance"
      ]
    }
  ];

  const facialTypes = [
    {
      name: "Classic Facial",
      price: "₹800",
      description: "Basic cleansing, exfoliation, and moisturizing",
      duration: "1 hour",
      bestFor: "All skin types"
    },
    {
      name: "Anti-Aging Facial",
      price: "₹2,000",
      description: "Advanced treatment for fine lines and wrinkles",
      duration: "1.5 hours",
      bestFor: "Mature skin"
    },
    {
      name: "Acne Control Facial",
      price: "₹1,500",
      description: "Specialized treatment for acne-prone skin",
      duration: "1.5 hours",
      bestFor: "Acne-prone skin"
    },
    {
      name: "Hydrating Facial",
      price: "₹1,200",
      description: "Intensive moisture treatment for dry skin",
      duration: "1 hour",
      bestFor: "Dry skin"
    }
  ];

  const spaPackages = [
    {
      name: "Relaxation Package",
      price: "₹3,000",
      includes: [
        "Full body massage",
        "Facial treatment",
        "Aromatherapy",
        "Tea service"
      ],
      duration: "2.5 hours"
    },
    {
      name: "Wellness Package",
      price: "₹4,500",
      includes: [
        "Body scrub",
        "Hot stone massage",
        "Facial treatment",
        "Wellness consultation"
      ],
      duration: "3 hours"
    },
    {
      name: "Luxury Package",
      price: "₹6,000",
      includes: [
        "Premium facial",
        "Full body massage",
        "Body wrap",
        "Spa amenities",
        "Refreshments"
      ],
      duration: "4 hours"
    }
  ];

  return (
    <>
      <div className="sr-only">
        <h1>BA-BU Family Salon - Skin & Body Care Services</h1>
        <p>Professional skincare for all skin types and concerns, including facial treatments, spa services, and wellness treatments.</p>
      </div>

      <main ref={pageRef}>
        {/* Hero Section - No padding top */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/baylee-gramling-a3xr2mVjT5M-unsplash.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 text-center text-white px-6">
            <h1 className="hero-title text-6xl lg:text-8xl font-gunteerz font-black uppercase tracking-wider mb-6">
              Skin & Body Care
            </h1>
            <h2 className="hero-subtitle text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-clip-text text-transparent mb-4">
              Rejuvenating Treatments & Wellness
            </h2>
            <p className="hero-description text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional skincare for all skin types and concerns. Experience ultimate relaxation and rejuvenation.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-white mb-6">
                Our Care Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nurture your skin and body with our comprehensive care services. Every treatment is designed for your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {skinServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="service-card bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 hover:bg-black/90 hover:border-yellow-400/60 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black p-3 rounded-full">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-gunteerz font-bold text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-clip-text text-transparent mb-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="font-bold">{service.price}</span>
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-white/80">
                              <Star className="w-4 h-4 text-[#ffd277] mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facial Types Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-black mb-6">
                Facial Treatments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect facial treatment for your skin type and concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facialTypes.map((facial, index) => (
                <div
                  key={index}
                  className="facial-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-[#77530a] via-[#ffd277] to-[#77530a] text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-gunteerz font-bold text-black mb-2">
                      {facial.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {facial.description}
                    </p>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-black">{facial.price}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {facial.duration}
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-600">
                        Best for: <span className="font-semibold">{facial.bestFor}</span>
                      </span>
                    </div>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] hover:from-[#8a5f0b] hover:via-[#ffd277] hover:to-[#8a5f0b] text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spa Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-black mb-6">
                Spa Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Indulge in our curated spa packages for the ultimate relaxation experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`package-card bg-gradient-to-br rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    index === 1
                      ? 'from-[#77530a] via-[#ffd277] to-[#77530a] border-[#ffd277] shadow-2xl'
                      : 'from-gray-50 to-gray-100 border-gray-200 shadow-lg'
                  }`}
                >
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-gunteerz font-bold text-center mb-4">
                    {pkg.name}
                  </h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-black">{pkg.price}</span>
                  </div>

                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-600">
                      Duration: <span className="font-semibold">{pkg.duration}</span>
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <Star className="w-5 h-5 text-[#ffd277] mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                        index === 1
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] hover:from-[#8a5f0b] hover:via-[#ffd277] hover:to-[#8a5f0b] text-black'
                      }`}
                    >
                      Book Package
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-black mb-6">
                Benefits of Our Treatments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="benefit-card text-center">
                <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Skin Health
                </h3>
                <p className="text-gray-600">
                  Improve skin texture, tone, and overall health
                </p>
              </div>

              <div className="benefit-card text-center">
                <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Stress Relief
                </h3>
                <p className="text-gray-600">
                  Relax and rejuvenate your mind and body
                </p>
              </div>

              <div className="benefit-card text-center">
                <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Anti-Aging
                </h3>
                <p className="text-gray-600">
                  Reduce fine lines and maintain youthful skin
                </p>
              </div>

              <div className="benefit-card text-center">
                <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Spa className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Wellness
                </h3>
                <p className="text-gray-600">
                  Holistic approach to beauty and wellness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-gunteerz font-bold mb-6">
              Ready to Rejuvenate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your skin and body care appointment today and experience ultimate relaxation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] hover:from-[#8a5f0b] hover:via-[#ffd277] hover:to-[#8a5f0b] text-black px-8 py-4 rounded-full font-bold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkinBodyCareServicePage;
