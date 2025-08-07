import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="bg-babu-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/BABU-White.png"
                alt={siteConfig.siteName}
                width={150}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Experience luxury and elegance at BA-BU Family Salon. We provide premium beauty and grooming services for the entire family.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-babu-accent-2 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-babu-accent-2 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-babu-accent-2 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-babu-accent-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-babu-accent-2">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Hair Styling</li>
              <li className="text-gray-300">Facial Treatments</li>
              <li className="text-gray-300">Bridal Makeup</li>
              <li className="text-gray-300">Hair Coloring</li>
              <li className="text-gray-300">Spa Treatments</li>
              <li className="text-gray-300">Men's Grooming</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-babu-accent-2">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-babu-accent-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-babu-accent-2" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-babu-accent-2" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-babu-accent-2 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Weekdays: {siteConfig.contact.workingHours.weekdays}</div>
                  <div>Sunday: {siteConfig.contact.workingHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 {siteConfig.siteName}. All rights reserved. | Designed with ❤️ for luxury beauty experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;