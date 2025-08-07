"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
}

export const FloatingNav = ({ navItems }: FloatingNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={cn(
              "flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-all duration-200 hover:bg-white/20",
              "hover:scale-105"
            )}
          >
            {item.icon}
            <span className="hidden sm:block">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
