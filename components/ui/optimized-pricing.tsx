'use client';

import { useRef } from 'react';
import { siteConfig } from "@/config/site";
import { ChevronRight, Clock } from 'lucide-react';

interface PricingService {
  name: string;
  price: string;
  duration: string;
  description: string;
  icon?: React.ReactNode;
}

interface OptimizedPricingProps {
  services: PricingService[];
  title: string;
  description: string;
  className?: string;
}

const OptimizedPricing = ({
  services,
  title,
  description,
  className = '',
}: OptimizedPricingProps) => {
  const pricingRef = useRef<HTMLElement>(null);

  return (
    <section ref={pricingRef} className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-4xl lg:text-5xl font-gunteerz font-black text-black mb-6">
            {title}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="pricing-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon || <Clock className="w-8 h-8" />}
                </div>
                <h4 className="text-2xl font-gunteerz font-bold text-black mb-4">
                  {service.name}
                </h4>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-black">
                    {service.price}
                  </span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.duration}
                </div>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] hover:from-[#8a5f0b] hover:via-[#ffd277] hover:to-[#8a5f0b] text-black px-8 py-3 rounded-full font-bold transition-all duration-300 text-sm inline-flex items-center"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedPricing;
