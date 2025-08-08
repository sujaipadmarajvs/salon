'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ArrowRight, Globe, Sun, Moon, Monitor } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useState } from 'react';

const Footer = () => {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('dark');

  const handleThemeChange = (newTheme: 'system' | 'light' | 'dark') => {
    setTheme(newTheme);
  };

  return (
    <footer className="bg-babu-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Leftmost Column - Company Branding & Theme Toggle */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Image
                src="/BABU-White.png"
                alt={siteConfig.siteName}
                width={120}
                height={60}
                className="h-8 w-auto object-contain mb-4"
              />
              <p className="text-white text-sm leading-relaxed mb-6">
                Experience luxury and elegance at BA-BU Family Salon. We provide premium beauty and grooming services for the entire family.
              </p>
            </div>

            {/* Theme Toggle Bar */}
            <div className="flex items-center space-x-1 bg-babu-primary/20 rounded-lg p-1 w-fit mb-6">
              <button
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'system' ? 'bg-babu-accent-2 text-white' : 'text-gray-300 hover:text-white'
                }`}
                aria-label="System theme"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' ? 'bg-babu-accent-2 text-white' : 'text-gray-300 hover:text-white'
                }`}
                aria-label="Light theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'dark' ? 'bg-babu-accent-2 text-white' : 'text-gray-300 hover:text-white'
                }`}
                aria-label="Dark theme"
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Hair Styling</li>
              <li className="text-gray-300 text-sm">Facial Treatments</li>
              <li className="text-gray-300 text-sm">Bridal Makeup</li>
              <li className="text-gray-300 text-sm">Hair Coloring</li>
              <li className="text-gray-300 text-sm">Spa Treatments</li>
              <li className="text-gray-300 text-sm">Men's Grooming</li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-babu-accent-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-babu-accent-2" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-babu-accent-2" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-babu-accent-2 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Weekdays: {siteConfig.contact.workingHours.weekdays}</div>
                  <div>Sunday: {siteConfig.contact.workingHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rightmost Column - Newsletter Signup & Social Media */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">
              Sign up for our newsletter *
            </h3>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-babu-primary/20 border border-babu-accent-2 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-babu-accent-2 focus:border-transparent text-sm"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-babu-accent-2 hover:text-white transition-colors border border-babu-accent-2 rounded"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-300 text-xs mb-6">
              By signing up you agree to our{' '}
              <Link href="/terms" className="text-babu-accent-2 hover:text-white">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-babu-accent-2 hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-babu-accent-2 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-babu-accent-2 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-babu-accent-2 transition-colors"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="/rss"
                className="text-white hover:text-babu-accent-2 transition-colors"
                aria-label="RSS Feed"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-current rounded-full"></div>
                  <div className="w-1 h-1 bg-current rounded-full ml-1"></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-babu-accent-2/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Left - Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-300">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>{siteConfig.siteName} © 2025</span>
            </div>

            {/* Right - Language Selector */}
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Globe className="w-4 h-4" />
              <span>English</span>
              <button className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element - Bottom Right */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-10">
        <div className="text-8xl font-bold bg-gradient-to-r from-babu-accent-2 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
          BEAUTY
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-gradient-to-b from-babu-accent-2 to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-gradient-to-b from-babu-accent-2 to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;