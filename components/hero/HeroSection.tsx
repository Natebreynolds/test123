"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroContent from "./HeroContent";
import SplineScene from "./SplineScene";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Scene */}
        <SplineScene />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <HeroContent scrollProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}