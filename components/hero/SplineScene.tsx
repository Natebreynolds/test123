"use client";

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadSpline = async () => {
      try {
        // Create and append the spline-viewer element
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/8Of0NpUSvZ50zBiI/scene.splinecode');
        viewer.setAttribute('loading-anim', 'false'); // Disable loading animation
        viewer.style.width = '100%';
        viewer.style.height = '100%';
        
        // Load the Spline viewer script
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
        
        // Wait for the script to load
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });

        // Wait for the custom element to be defined
        await customElements.whenDefined('spline-viewer');
        
        containerRef.current?.appendChild(viewer);
      } catch (err) {
        console.error('Error loading Spline scene:', err);
      }
    };

    loadSpline();

    return () => {
      const viewer = containerRef.current?.querySelector('spline-viewer');
      if (viewer) {
        viewer.remove();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Spline Scene Container */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background/90 pointer-events-none" />
    </div>
  );
}