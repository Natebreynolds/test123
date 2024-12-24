"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Revolutionizing Sales with AI-Powered Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Breakthrough Coaching AI, we combine cutting-edge AI technology with personalized 
              strategies to elevate your sales team. Consider us your virtual Chief Sales Officer, 
              providing data-driven insights and tailored solutions to help you dominate your market.
            </p>
            <ul className="space-y-4">
              {[
                "Data-driven sales strategies",
                "AI-powered performance analysis",
                "Personalized coaching solutions",
                "Real-time insights and optimization"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}