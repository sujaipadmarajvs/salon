"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Marquee = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    reverse?: boolean;
    pauseOnHover?: boolean;
  }
>(({ className, reverse, pauseOnHover = false, children, ...props }, ref) => {
  const childArray = React.Children.toArray(children);
  const spacedChildren = childArray.map((child, index) => (
    <div
      key={`marquee-item-${index}`}
      className="shrink-0"
      style={{ paddingInline: "calc(var(--gap, 1rem) / 2)" }}
    >
      {child}
    </div>
  ));
  // We set a CSS variable for distance to ensure loop is seamless even if gap/padding changes
  const marqueeStyle: React.CSSProperties = {
    // 50% equals exactly one copy width because we duplicate children
    ["--marquee-distance" as any]: "50%",
    // Cancel the half-gap padding on the extremes so the seam aligns perfectly
    marginLeft: "calc(var(--gap, 1rem) / -2)",
    marginRight: "calc(var(--gap, 1rem) / -2)",
  };
  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex w-max animate-marquee will-change-transform transform-gpu items-stretch",
          pauseOnHover && "hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
        style={marqueeStyle}
      >
        {spacedChildren}
        {spacedChildren}
      </div>
    </div>
  );
});
Marquee.displayName = "Marquee";

export { Marquee };
