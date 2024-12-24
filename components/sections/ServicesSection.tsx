"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "Virtual CSO",
    description: "AI-powered strategic sales leadership and guidance",
    tags: ["STRATEGY", "LEADERSHIP", "AI INSIGHTS"],
    link: "/services/virtual-cso"
  },
  {
    id: "02",
    title: "AI Sales Automation",
    description: "Streamline and optimize your sales processes",
    tags: ["AUTOMATION", "OPTIMIZATION", "ANALYTICS"],
    link: "/services/sales-automation"
  },
  {
    id: "03",
    title: "AI Sales Coaching",
    description: "Personalized coaching and performance enhancement",
    tags: ["COACHING", "TRAINING", "DEVELOPMENT"],
    link: "/services/sales-coaching"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="inline-block">Elevate</span>{" "}
            <span className="inline-block">your business</span>{" "}
            <span className="inline-block text-foreground/60">with our services</span>
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group relative bg-card/30 hover:bg-card/40 backdrop-blur-sm border border-foreground/5 rounded-xl p-8 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-2xl font-medium text-foreground/40">
                        {service.id}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-xl text-foreground/60 max-w-2xl">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}