'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MapPin, Search, User, ShoppingBag } from 'lucide-react';
import { IconHome, IconUser, IconMessage, IconBriefcase, IconPhone } from '@tabler/icons-react';
import { siteConfig } from '@/config/site';
import { FloatingNav } from './ui/floating-navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/gallery' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const floatingNavItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <IconBriefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Works",
      link: "/gallery",
      icon: <IconBriefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <>
      {/* Promotional Banner */}
      {showPromoBanner && !isScrolled && (
        <div className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-black py-2 px-4 text-sm relative">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">{siteConfig.contact.address}</span>
              </div>
              <span className="hidden md:inline">|</span>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <span className="hidden lg:inline">|</span>
              <span className="hidden lg:inline font-medium">₹500 OFF ON YOUR FIRST APPOINTMENT ABOVE ₹1499 USE CODE: BABUFIRST</span>
            </div>
            <button
              onClick={() => setShowPromoBanner(false)}
              className="text-black hover:text-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-babu-primary shadow-lg top-0' 
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled ? '0' : showPromoBanner ? '40px' : '0' }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="logo-glossy hover-zoom">
                <Image
                  src={isScrolled ? "/BABU-Black.png" : "/BABU-White.png"}
                  alt={siteConfig.siteName}
                  width={600}
                  height={300}
                  className="h-60 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Navigation space for future use */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-md ${
                isScrolled ? 'text-babu-accent-2' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-babu-primary border-t border-babu-secondary shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-babu-accent-2 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-babu-accent-1 hover:bg-babu-accent-2 text-white px-3 py-2 rounded-md font-medium text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Navigation */}
      <FloatingNav navItems={floatingNavItems} />
    </>
  );
};

export default Header;