import { ServiceType } from "@/types/services";

export const services: ServiceType[] = [
  {
    id: "virtual-cso",
    title: "Virtual Chief Sales Officer (CSO) Services",
    description: "Empowering your sales strategy with executive-level insight",
    features: [
      "Strategic Oversight: Drive revenue growth through actionable sales strategies",
      "Team Leadership: Optimize performance with training and coaching",
      "Performance Metrics: Leverage data-driven insights to elevate sales outcomes"
    ],
    price: "Contact us to discuss your unique needs",
    ctaText: "Book a Call for Pricing",
    ctaLink: "/contact",
    tags: ["STRATEGY", "LEADERSHIP", "AI INSIGHTS"]
  },
  {
    id: "ai-automation",
    title: "Sales and Service AI Automation",
    description: "Revolutionize your engagement with cutting-edge AI solutions",
    features: [
      "Custom AI Solutions: Automate sales and customer service processes",
      "Personalized Engagement: Deploy AI for targeted communications",
      "Enhanced Efficiency: Free up time for strategic initiatives"
    ],
    price: "$1,000 - $5,000",
    ctaText: "Book a Consultation",
    ctaLink: "/contact",
    tags: ["AUTOMATION", "AI", "EFFICIENCY"]
  },
  {
    id: "executive-coaching",
    title: "1-on-1 Executive Coaching",
    description: "Personalized growth for high achievers",
    features: [
      "Deep Insights: Understand and overcome barriers",
      "Custom Roadmaps: Develop actionable transformation plans",
      "Accountability Support: Stay aligned with consistent guidance"
    ],
    price: "$499 per 1.5-hour session",
    ctaText: "Book a Session",
    ctaLink: "/contact",
    tags: ["COACHING", "LEADERSHIP", "GROWTH"]
  },
  {
    id: "group-coaching",
    title: "Group Coaching",
    description: "Collaborative breakthroughs for team success",
    features: [
      "Focused Workshops: Gain clarity on shared goals",
      "Dynamic Interaction: Engage in active learning",
      "Proven Frameworks: Leverage the '7 Keys to Connecting'"
    ],
    price: "$199 per hour",
    ctaText: "Schedule Group Coaching",
    ctaLink: "/contact",
    tags: ["TEAMS", "COLLABORATION", "TRAINING"]
  },
  {
    id: "strategy-calls",
    title: "Strategy Calls",
    description: "Plan and execute with confidence",
    features: [
      "Consultative Approach: Identify opportunities and tackle challenges",
      "Goal-Oriented Sessions: Focus on specific objectives",
      "Expert Analysis: Benefit from years of industry experience"
    ],
    price: "3 calls for $597",
    ctaText: "Book Your Package",
    ctaLink: "/contact",
    tags: ["STRATEGY", "CONSULTING", "PLANNING"]
  },
  {
    id: "ai-blueprint",
    title: "AI Blueprint Creation",
    description: "Design your future with AI",
    features: [
      "Custom Frameworks: Develop AI-driven solutions",
      "Implementation Guides: Step-by-step adoption plans",
      "Future-Proofing: Stay ahead with long-term strategies"
    ],
    price: "$250 per blueprint",
    ctaText: "Start Your Blueprint",
    ctaLink: "/contact",
    tags: ["AI", "PLANNING", "INNOVATION"]
  }
];