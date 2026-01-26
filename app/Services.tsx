"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Truck, PackageCheck, Anchor, Globe2, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Ship,
    title: "Maritime Fleet",
    tag: "Primary",
    description: "Our ocean freight network spans the most strategic maritime routes on the planet.",
  },
  {
    icon: Plane,
    title: "Air Network",
    tag: "Priority",
    description: "Next-day global delivery for high-value assets and time-critical exports.",
  },
  {
    icon: Truck,
    title: "Inland Logistics",
    tag: "Regional",
    description: "Integrated last-mile delivery systems that bridge the gap between ports and commerce.",
  },
  {
    icon: PackageCheck,
    title: "Customs Intel",
    tag: "Expert",
    description: "Sophisticated regulatory handling ensuring zero-delay border transitions.",
  },
  {
    icon: Anchor,
    title: "Strategic Ports",
    tag: "Global",
    description: "Presence in all Tier-1 global ports with exclusive handling priority.",
  },
  {
    icon: Globe2,
    title: "Smart Supply",
    tag: "Digital",
    description: "AI-driven supply chain optimization for maximum export efficiency.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Text in background */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-black/[0.02] select-none leading-none pointer-events-none">
        SERVICE
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">
                Solutions
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black font-heading tracking-tight text-primary leading-[0.9]"
            >
              BEYOND <br />
              <span className="text-secondary">BOUNDARIES.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <p className="text-muted-foreground text-xl max-w-xs font-light">
              Crafting bespoke export pathways for the world's most ambitious brands.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-r border-b border-border p-12 hover:bg-primary transition-colors duration-500"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-full border border-border group-hover:border-secondary flex items-center justify-center transition-colors">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-secondary/50 border border-border group-hover:border-secondary/20 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-3xl font-bold font-heading mb-6 text-primary group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-gray-400 transition-colors text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 cursor-pointer">
                  <span className="font-bold text-sm uppercase tracking-widest">Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
