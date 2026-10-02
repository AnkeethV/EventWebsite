"use client";

import { eventConfig } from "../config/event";
import { FadeIn } from "./animations/FadeIn";

export default function EventDetails() {
  const dateObj = new Date(eventConfig.dateTime);
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center border border-primary/20 p-8 md:p-12 rounded-lg relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
          <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">
            When &amp; Where
          </span>
        </div>

        <div className="flex flex-col gap-8">
          <FadeIn delay={0.2}>
            <h4 className="text-2xl font-display text-foreground mb-2">{eventConfig.date}</h4>
            <p className="text-primary uppercase tracking-widest text-sm font-semibold">{dayName}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="w-12 h-[1px] bg-primary/30 mx-auto" />
          </FadeIn>

          <FadeIn delay={0.4}>
            <h4 className="text-2xl font-display text-foreground mb-2">{eventConfig.venue.name}</h4>
            <p className="text-foreground/70 max-w-xs mx-auto">
              {eventConfig.venue.address}
            </p>
          </FadeIn>


        </div>
      </div>
    </section>
  );
}
