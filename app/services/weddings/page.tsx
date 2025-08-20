'use client';

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { Crown, Scissors, UserCheck, Sparkles, Star, Clock, Users } from "lucide-react";
import { gsap } from "gsap";

const WeddingsServicePage = () => {
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
      '.package-card',
      '.cta-section'
    ], {
      opacity: 0,
      y: 30
    });

    // Create timeline for smooth animations
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.3 // Small delay to ensure smooth transition from previous page
    });

    // Hero section animations
    timeline
      .to('.hero-title', { opacity: 1, y: 0, duration: 1 })
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.7')
      .to('.hero-description', { opacity: 1, y: 0, duration: 1 }, '-=0.7');

    // Services section animations
    timeline
      .to('.service-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2
      }, '-=0.3');

    // Packages section animations
    timeline
      .to('.package-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1
      }, '-=0.2');

    // CTA section animation
    timeline
      .to('.cta-section', {
        opacity: 1,
        y: 0,
        duration: 1
      }, '-=0.5');

    return () => {
      timeline.kill();
    };
  }, []);

  const weddingServices = [
    {
      id: 1,
      name: "Bridal Makeup",
      description: "Complete bridal makeover with professional makeup, hair styling, and accessories. Includes trial session and touch-ups.",
      price: "₹5,000 - ₹15,000",
      duration: "3-4 hours",
      icon: Crown,
      features: [
        "Professional makeup application",
        "Hair styling and accessories",
        "Trial session included",
        "Touch-up services",
        "Bridal consultation"
      ]
    },
    {
      id: 2,
      name: "Hair Styling",
      description: "Specialized bridal hair styling with modern techniques, extensions, and hair accessories.",
      price: "₹800 - ₹3,000",
      duration: "2-3 hours",
      icon: Scissors,
      features: [
        "Modern hair styling techniques",
        "Hair extensions (if needed)",
        "Hair accessories included",
        "Hair treatment before styling",
        "Long-lasting hold products"
      ]
    },
    {
      id: 3,
      name: "Groom Grooming",
      description: "Complete grooming package for the groom including haircut, beard styling, and facial treatments.",
      price: "₹500 - ₹2,000",
      duration: "1-2 hours",
      icon: UserCheck,
      features: [
        "Professional haircut",
        "Beard trimming and styling",
        "Facial treatment",
        "Hair wash and styling",
        "Grooming consultation"
      ]
    },
    {
      id: 4,
      name: "Pre-wedding Care",
      description: "Comprehensive pre-wedding beauty and wellness packages for both bride and groom.",
      price: "₹2,000 - ₹8,000",
      duration: "Multiple sessions",
      icon: Sparkles,
      features: [
        "Skin care treatments",
        "Hair care and treatments",
        "Body care and massage",
        "Wellness consultations",
        "Customized care plans"
      ]
    }
  ];

  const packages = [
    {
      name: "Basic Bridal Package",
      price: "₹8,000",
      includes: [
        "Bridal makeup",
        "Hair styling",
        "Basic accessories",
        "Trial session"
      ]
    },
    {
      name: "Premium Bridal Package",
      price: "₹15,000",
      includes: [
        "Bridal makeup",
        "Hair styling with extensions",
        "Premium accessories",
        "Trial session",
        "Touch-up services",
        "Pre-wedding care"
      ]
    },
    {
      name: "Complete Wedding Package",
      price: "₹25,000",
      includes: [
        "Bridal makeup and hair",
        "Groom grooming",
        "Premium accessories",
        "Multiple trial sessions",
        "Touch-up services",
        "Pre-wedding care for both",
        "Wedding day support"
      ]
    }
  ];

  return (
    <>
      <div className="sr-only">
        <h1>BA-BU Family Salon - Wedding Services</h1>
        <p>Complete bridal makeup, hair styling, and groom grooming services for your special day.</p>
      </div>

      <main ref={pageRef}>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/jonathan-borba-qJ2mhxmateo-unsplash.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 text-center text-white px-6">
            <h1 className="hero-title text-6xl lg:text-8xl font-gunteerz font-black uppercase tracking-wider mb-6">
              Wedding Services
            </h1>
            <h2 className="hero-subtitle text-2xl lg:text-3xl font-semibold text-secondary mb-4">
              Complete Bridal & Groom Packages
            </h2>
            <p className="hero-description text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional bridal makeup, hair styling, and groom grooming services for your special day.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-white mb-6">
                Our Wedding Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Every detail matters on your special day. Our expert team ensures you look and feel your absolute best.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {weddingServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="service-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent1 text-black p-3 rounded-full">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-gunteerz font-bold text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-accent1 mb-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="font-bold">{service.price}</span>
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-white/80">
                              <Star className="w-4 h-4 text-accent1 mr-2" />
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

        {/* Packages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-primary mb-6">
                Wedding Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect package for your special day. All packages include consultation and trial sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`package-card bg-gradient-to-br rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    index === 1
                      ? 'from-accent1 to-accent2 border-accent1 shadow-2xl'
                      : 'from-gray-50 to-gray-100 border-gray-200 shadow-lg'
                  }`}
                >
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-gunteerz font-bold text-center mb-4">
                    {pkg.name}
                  </h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <Star className="w-5 h-5 text-accent1 mr-3" />
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
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-accent1 text-black hover:bg-accent2'
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

        {/* CTA Section */}
        <section className="cta-section py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-gunteerz font-bold mb-6">
              Ready for Your Perfect Wedding Look?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your wedding services today and let us make your special day even more beautiful
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
                className="bg-accent1 hover:bg-accent2 text-black px-8 py-4 rounded-full font-bold transition-all duration-300"
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

export default WeddingsServicePage;
