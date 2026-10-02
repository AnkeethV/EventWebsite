"use client";

import { eventConfig } from "../config/event";
import { FadeIn } from "./animations/FadeIn";

export default function Story() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h3 className="text-sm tracking-[0.3em] uppercase text-primary mb-8 font-semibold">
            {eventConfig.story.title}
          </h3>
        </FadeIn>
        
        <div className="space-y-6">
          {eventConfig.story.paragraphs.map((para, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <p className="text-lg md:text-xl font-light text-foreground/80 leading-relaxed">
                {para}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
