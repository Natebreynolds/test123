"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceType } from "@/types/services";

export default function ServiceCard({
  title,
  description,
  features,
  price,
  ctaText,
  ctaLink,
  tags
}: ServiceType) {
  return (
    <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <span className="text-foreground/70">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-xl font-semibold">{price}</p>
          <Button 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            asChild
          >
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
}