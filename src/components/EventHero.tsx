"use client";

import { eventConfig } from "../config/event";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EventHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={eventConfig.venue.image || "/gallery/venuelawn.png"} 
          alt="Event Hero" 
          fill 
          className="object-cover object-top opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto py-20">
        <FadeIn delay={0.2}>
          <h2 className="text-sm tracking-[0.3em] uppercase text-primary mb-8 font-semibold">
            {eventConfig.eventType}
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h3 className="text-4xl md:text-6xl font-display text-accent mb-6 drop-shadow-sm">
            {eventConfig.hosts.primary} &amp; {eventConfig.hosts.secondary}
          </h3>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="w-12 h-[2px] bg-primary mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-xl md:text-2xl font-light mb-4 text-foreground/90 tracking-wide">
            {eventConfig.date}
          </p>
          <p className="text-base md:text-lg text-foreground/70 uppercase tracking-widest">
            {eventConfig.venue.name}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
