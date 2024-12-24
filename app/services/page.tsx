"use client";

import { motion } from "framer-motion";
import ParticleNebula from "@/components/hero/ParticleNebula";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParticleNebula />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ServicesHero />
        <ServicesList />
      </div>
    </main>
  );
}