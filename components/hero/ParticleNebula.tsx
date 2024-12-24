"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleNebula() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particles: THREE.Points[] = [];
    const particleCount = 1000;
    const colors = [
      new THREE.Color("#93C5FD"), // Blue
      new THREE.Color("#818CF8"), // Indigo
      new THREE.Color("#C084FC"), // Purple
      new THREE.Color("#F472B6"), // Pink
    ];

    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      
      for (let j = 0; j < particleCount; j++) {
        positions[j * 3] = (Math.random() - 0.5) * 20;
        positions[j * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[j * 3 + 2] = (Math.random() - 0.5) * 20;
        sizes[j] = Math.random() * 2;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.1,
        color: colors[i],
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      const particle = new THREE.Points(geometry, material);
      particles.push(particle);
      scene.add(particle);
    }

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      particles.forEach((particle, i) => {
        const time = Date.now() * 0.0001;
        particle.rotation.x = Math.sin(time + i * 0.1) * 0.2;
        particle.rotation.y = Math.cos(time + i * 0.1) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    />
  );
}