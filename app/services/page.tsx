import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';
import { Scissors, Sparkles, Palette, Space as Spa, UserCheck, Crown } from 'lucide-react';

const Services = () => {
  const serviceIcons = {
    'Hair Styling': Scissors,
    'Facial Treatments': Sparkles,
    'Bridal Makeup': Crown,
    'Hair Coloring': Palette,
    'Spa Treatments': Spa,
    'Men\'s Grooming': UserCheck,
  };

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-babu-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of premium beauty and grooming services, 
              designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.services.map((service, index) => {
                const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons] || Scissors;
                
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="p-8">
                      {/* Icon */}
                      <div className="bg-babu-teal text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-serif font-bold text-babu-primary mb-4 text-center">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6 text-center leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Price */}
                      <div className="text-center">
                        <span className="text-babu-accent-1 font-semibold text-lg">
                          {service.price}
                        </span>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="mt-6 text-center">
                        <a
                          href={siteConfig.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-babu-accent-1 hover:bg-babu-accent-2 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-babu-primary mb-4">
                Why Choose Our Services?
              </h2>
              <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-babu-teal text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Crown className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-babu-primary mb-2">Premium Quality</h3>
                <p className="text-gray-600">We use only the finest products and latest techniques</p>
              </div>

              <div className="text-center">
                <div className="bg-babu-teal text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-babu-primary mb-2">Expert Stylists</h3>
                <p className="text-gray-600">Our team consists of highly trained professionals</p>
              </div>

              <div className="text-center">
                <div className="bg-babu-teal text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-babu-primary mb-2">Hygienic Environment</h3>
                <p className="text-gray-600">Maintaining the highest standards of cleanliness</p>
              </div>

              <div className="text-center">
                <div className="bg-babu-teal text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Spa className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-babu-primary mb-2">Relaxing Ambiance</h3>
                <p className="text-gray-600">Enjoy a peaceful and luxurious salon experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-babu-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your appointment today and experience the luxury of BA-BU Family Salon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-babu-teal hover:bg-babu-teal-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;