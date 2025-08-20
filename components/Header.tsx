"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Home, User, Briefcase, Image as ImageIcon, Phone, MapPin, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showPromoBanner, setShowPromoBanner] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // This effect is only for the promo banner visibility
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Separate effect for GSAP animations that depends on pathname
    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        // Small delay to ensure DOM is ready after route change
        const timer = setTimeout(() => {
            // Kill existing ScrollTrigger instances for this header
            ScrollTrigger.getAll().forEach(st => {
                if (st.trigger === document.body || st.trigger === header) {
                    st.kill();
                }
            });

            // Reset header visibility for specific pages
            const shouldShowHeader = pathname === '/works' || pathname === '/' || pathname.startsWith('/works/');
            if (shouldShowHeader) {
                gsap.set(header, {
                    yPercent: 0,
                    opacity: 1,
                });
            }

            // Refresh ScrollTrigger to recalculate positions
            ScrollTrigger.refresh();

            // Animate background color and blur when scrolling past the top
            gsap.to(header, {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                duration: 0.3,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "body",
                    start: "top -10px",
                    end: "top -10px",
                    toggleActions: "play none none reverse",
                    refreshPriority: -1, // Lower priority for this trigger
                },
            });

            // Show/hide header based on scroll direction
            const showAnim = gsap.from(header, {
                yPercent: -110,
                paused: true,
                duration: 0.4,
                ease: "power2.inOut"
            }).progress(1);

            ScrollTrigger.create({
                start: "top top-=-80",
                end: 99999,
                refreshPriority: -1, // Lower priority for this trigger
                onUpdate: (self) => {
                    if (self.direction === -1) { // Scrolling up
                        showAnim.play();
                    } else { // Scrolling down
                        if (self.scroll() > 80) {
                            showAnim.reverse();
                        }
                    }
                },
            });
        }, 100); // 100ms delay

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(st => {
                if (st.trigger === document.body || st.trigger === header) {
                    st.kill();
                }
            });
        };
    }, [pathname]); // Re-run when pathname changes

    const menuItems = [
        { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
        { name: "About", href: "/#about", icon: <User className="w-5 h-5" /> },
        {
            name: "Services",
            href: "/services",
            icon: <Briefcase className="w-5 h-5" />,
        },
        {
            name: "Works",
            href: "/works",
            icon: <ImageIcon className="w-5 h-5" />,
        },
        {
            name: "Contact",
            href: "/#contact",
            icon: <Phone className="w-5 h-5" />,
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
                                <span className="hidden sm:inline">
                                    {siteConfig.contact.address}
                                </span>
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
                            <span className="hidden lg:inline font-medium">
                                ₹500 OFF ON YOUR FIRST APPOINTMENT ABOVE ₹1499
                                USE CODE: BABUFIRST
                            </span>
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
              ref={headerRef}
              className="fixed w-full z-40 bg-transparent"
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
