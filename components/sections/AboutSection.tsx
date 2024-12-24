"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [50, 0, 0, 50]
  );

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen py-24 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="relative z-20 container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 mb-8"
          >
            Revolutionizing Sales Through AI Innovation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-foreground/80 leading-relaxed mb-12"
          >
            At Breakthrough Coaching AI, we combine cutting-edge AI solutions with 
            tailored sales strategies to help businesses achieve their full potential. 
            Our virtual CSO platform provides real-time insights, personalized coaching, 
            and data-driven recommendations.
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              "Advanced AI-powered sales analytics",
              "Personalized coaching and strategy",
              "Real-time performance insights",
              "Automated sales optimization"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-card/30 backdrop-blur-sm p-4 rounded-xl border border-white/5"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-lg text-foreground/80">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}