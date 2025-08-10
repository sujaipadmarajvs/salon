"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToniGuyFooterProps {
  className?: string;
}

// Footer inspired by toniandguyindia.com structure (scraped with MCP)
const ToniGuyFooter = ({ className }: ToniGuyFooterProps) => {
  return (
    <footer
      aria-label="Toni & Guy style footer"
      className={cn("bg-black text-white", className)}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex w-full items-center justify-center">
          <img
            src="https://toniandguyindia.com/wp-content/uploads/2023/01/TG-White.png"
            alt="TONI&GUY Logo"
            className="h-10 w-auto sm:h-12"
            loading="lazy"
          />
        </div>

        {/* Headline */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            <span className="text-white/90">LOOK</span>
            <span className="mx-2 text-white/90">YOUR</span>
            <span className="text-white/90">BEST</span>
          </h2>
        </div>

        {/* Address + Email */}
        <div className="mt-10 grid grid-cols-1 gap-6 text-center text-sm sm:grid-cols-2 sm:text-base">
          <div>
            <p className="font-medium tracking-wide">PROFILE INDIA INTERNATIONAL</p>
            <p className="text-white/80">GREATER KAILASH DELHI 110048</p>
          </div>
          <div>
            <Link
              href="mailto:booking@domain.com?subject=Book%20a%20Appoitment"
              className="text-white/90 underline-offset-4 hover:underline"
              aria-label="Email: toniguydelhi.academy@gmail.com"
            >
              toniguydelhi.academy@gmail.com
            </Link>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="https://toniandguyindian.zenoti.com/webstorenew"
            className="rounded-md bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="Book Now"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <Link
            href="https://www.instagram.com/toniandguyindiaofficial"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/ToniAndGuyIndiaOfficial/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            <Facebook className="h-5 w-5" />
          </Link>
        </div>

        {/* Links */}
        <nav className="mt-8" aria-label="Footer links">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
            <li>
              <Link href="https://toniandguyindia.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="https://toniandguyindia.com/tnc/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="https://toniandguyindia.com/services/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="https://toniandguyindia.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="https://toniandguyindia.com/about-us/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-white/70">
          © Copyright 2025 TONI&amp;GUY INDIA
        </div>
      </div>
    </footer>
  );
};

export default ToniGuyFooter;


