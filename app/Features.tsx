"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe2 } from "lucide-react";

const features = [
  "Global Partner Network covering 150+ countries",
  "Real-time shipment tracking and visibility",
  "Dedicated account manager for every client",
  "24/7 Support and crisis management",
  "Sustainable and eco-friendly shipping options",
];

export default function Features() {
  return (
    <section id="network" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Why Choose Nexus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
              Connecting Your Business to the <span className="text-secondary">Global Economy</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We don't just move cargo; we optimize your entire supply chain. Our state-of-the-art technology and extensive global network ensure your business stays ahead in a fast-paced world.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-12 rounded-full">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent z-10" />
              <img
                src="/global-network.png"
                alt="Global Network Visualization"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Globe2 className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-primary font-bold text-3xl">150+</p>
                  <p className="text-sm text-muted-foreground font-medium">Countries Served</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
