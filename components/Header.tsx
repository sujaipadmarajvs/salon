'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, User, Briefcase, Image as ImageIcon, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;

    if (header) {
      gsap.to(header, {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        duration: 0.3,
        scrollTrigger: {
          trigger: 'body',
          start: 'top -10px',
          end: 'top -10px',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  const menuItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '/#about', icon: <User className="w-5 h-5" /> },
    { name: 'Services', href: '/services', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Works', href: '/gallery', icon: <ImageIcon className="w-5 h-5" /> },
    { name: 'Contact', href: '/#contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        ref={headerRef}
        className="fixed w-full z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/BABU-White.png"
                  alt={siteConfig.siteName}
                  width={150}
                  height={75}
                  className="h-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Bottom Dock for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm shadow-lg z-50">
        <div className="flex justify-around items-center h-16">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center text-white hover:text-gray-300 transition-colors p-2"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
