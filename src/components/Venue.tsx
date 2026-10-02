"use client";

import { eventConfig } from "../config/event";
import { MapPin } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

export default function Venue() {
  return (
    <section className="py-20 bg-muted px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <FadeIn direction="right" className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-display text-foreground mb-6">Location</h3>
          <p className="text-xl font-display text-primary mb-2">{eventConfig.venue.name}</p>
          <p className="text-foreground/70 mb-8 whitespace-pre-line leading-relaxed">
            {eventConfig.venue.address}
          </p>

          <a
            href={eventConfig.venue.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-primary hover:scale-105 transition-all shadow-md"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </FadeIn>

        <FadeIn direction="left" delay={0.2} className="lg:w-2/3 w-full h-[400px] bg-border rounded-lg overflow-hidden relative shadow-md">
          <iframe
            src={eventConfig.venue.mapUrl}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Venue Map"
          />
        </FadeIn>
      </div>
    </section>
  );
}
