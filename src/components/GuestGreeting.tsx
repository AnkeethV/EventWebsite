"use client";

import { eventConfig } from "../config/event";
import { useGuest } from "../context/GuestContext";

export default function GuestGreeting() {
  const { guest, dynamicName } = useGuest();

  if (!eventConfig.greeting.enabled) return null;

  const displayName = guest?.displayName || guest?.name || dynamicName || eventConfig.greeting.fallbackName;

  return (
    <section className="py-20 px-6 text-center max-w-3xl mx-auto">
      <div className="mb-8">
        <span className="text-xl md:text-2xl font-display text-primary italic">
          {eventConfig.greeting.prefix}
        </span>
        <h2 className="text-4xl md:text-5xl font-display text-foreground mt-2 mb-6">
          {displayName} Family,
        </h2>
      </div>
      <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light max-w-2xl mx-auto">
        {eventConfig.greeting.message}
      </p>
    </section>
  );
}
