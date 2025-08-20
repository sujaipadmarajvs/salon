'use client';

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { Scissors, Palette, Sparkles, Star, Clock, Zap } from "lucide-react";
import { gsap } from "gsap";

const HairCareServicePage = () => {
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
      '.treatment-card',
      '.benefit-card',
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

    // Treatments section animations
    timeline
      .to('.treatment-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1
      }, '-=0.2');

    // Why Choose Us section animations
    timeline
      .to('.benefit-card', {
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

  const hairServices = [
    {
      id: 1,
      name: "Hair Cutting",
      description: "Professional haircuts for all hair types and styles. From classic cuts to modern trends, we create the perfect look for you.",
      price: "₹300 - ₹800",
      duration: "45-60 minutes",
      icon: Scissors,
      features: [
        "Professional consultation",
        "Style recommendations",
        "Precision cutting techniques",
        "Hair wash and styling",
        "Style tips and maintenance"
      ]
    },
    {
      id: 2,
      name: "Hair Styling",
      description: "Creative hair styling for special occasions, parties, and everyday looks. We use premium products for long-lasting styles.",
      price: "₹500 - ₹2,000",
      duration: "1-2 hours",
      icon: Scissors,
      features: [
        "Creative styling consultation",
        "Premium styling products",
        "Long-lasting hold techniques",
        "Accessories and finishing",
        "Style maintenance tips"
      ]
    },
    {
      id: 3,
      name: "Hair Coloring",
      description: "Professional hair coloring services including highlights, lowlights, balayage, and full color transformations.",
      price: "₹1,200 - ₹5,000",
      duration: "2-4 hours",
      icon: Palette,
      features: [
        "Color consultation",
        "Premium hair colors",
        "Professional application",
        "Color protection treatment",
        "Maintenance guidance"
      ]
    },
    {
      id: 4,
      name: "Hair Treatments",
      description: "Nourishing hair treatments for damaged, dry, or colored hair. Restore health and shine to your locks.",
      price: "₹800 - ₹2,500",
      duration: "1-2 hours",
      icon: Sparkles,
      features: [
        "Hair analysis",
        "Customized treatment plans",
        "Deep conditioning",
        "Protein treatments",
        "Aftercare instructions"
      ]
    }
  ];

  const treatments = [
    {
      name: "Deep Conditioning",
      price: "₹800",
      description: "Intensive moisture treatment for dry and damaged hair",
      duration: "45 minutes"
    },
    {
      name: "Protein Treatment",
      price: "₹1,200",
      description: "Strengthening treatment for weak and brittle hair",
      duration: "1 hour"
    },
    {
      name: "Keratin Treatment",
      price: "₹2,500",
      description: "Smoothing and frizz-control treatment",
      duration: "2-3 hours"
    },
    {
      name: "Hair Spa",
      price: "₹1,500",
      description: "Complete hair care with massage and relaxation",
      duration: "1.5 hours"
    }
  ];

  return (
    <>
      <div className="sr-only">
        <h1>BA-BU Family Salon - Hair Care Services</h1>
        <p>Professional hair cutting, styling, coloring, and treatments for all hair types and textures.</p>
      </div>

      <main ref={pageRef}>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/engin-akyurt-35NAaB_Nmx8-unsplash.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 text-center text-white px-6">
            <h1 className="hero-title text-6xl lg:text-8xl font-gunteerz font-black uppercase tracking-wider mb-6">
              Hair Care Services
            </h1>
            <h2 className="hero-subtitle text-2xl lg:text-3xl font-semibold text-secondary mb-4">
              Professional Hair Styling & Treatments
            </h2>
            <p className="hero-description text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From basic cuts to advanced styling, we care for all hair types and textures with expert techniques.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-white mb-6">
                Our Hair Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your look with our comprehensive hair care services. Every cut, style, and treatment is crafted with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {hairServices.map((service) => {
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

        {/* Treatments Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-primary mb-6">
                Special Hair Treatments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Give your hair the care it deserves with our specialized treatment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="treatment-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="bg-accent1 text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-gunteerz font-bold text-primary mb-2">
                      {treatment.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {treatment.description}
                    </p>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-primary">{treatment.price}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {treatment.duration}
                    </div>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent1 hover:bg-accent2 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-gunteerz font-black text-primary mb-6">
                Why Choose Our Hair Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="benefit-card text-center">
                <div className="bg-accent1 text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Expert Stylists
                </h3>
                <p className="text-gray-600">
                  Our team consists of highly trained and experienced hair professionals
                </p>
              </div>

              <div className="benefit-card text-center">
                <div className="bg-accent1 text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Premium Products
                </h3>
                <p className="text-gray-600">
                  We use only the finest hair care products and latest techniques
                </p>
              </div>

              <div className="benefit-card text-center">
                <div className="bg-accent1 text-black w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Customized Care
                </h3>
                <p className="text-gray-600">
                  Every service is tailored to your specific hair type and needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-gunteerz font-bold mb-6">
              Ready to Transform Your Hair?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your hair care appointment today and experience the BA-BU difference
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

export default HairCareServicePage;
