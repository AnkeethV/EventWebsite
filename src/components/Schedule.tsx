"use client";

import { eventConfig } from "../config/event";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";

export default function Schedule() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-display text-center text-foreground mb-16">
            Schedule of Events
          </h3>
        </FadeIn>

        <div className="relative border-l border-primary/20 ml-4 md:ml-1/2 md:-translate-x-[0.5px]">
          {eventConfig.schedule.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn 
                key={idx} 
                direction={isEven ? "right" : "left"} 
                delay={idx * 0.2} 
                className="mb-12 relative flex items-center w-full"
              >
                {/* Node */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />

                {/* Content wrapper */}
                <div className={`w-full pl-8 md:pl-0 flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`md:w-[45%] flex flex-col ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    {item.time && (
                      <p className="text-primary font-semibold text-sm tracking-widest mb-1">{item.time}</p>
                    )}
                    <h4 className="text-xl font-display text-foreground mb-2">{item.title}</h4>
                    {item.description && (
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                    )}
                    {item.image && (
                      <div className={`mt-4 relative w-full h-32 md:h-40 rounded-lg overflow-hidden border border-primary/10 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} hover:shadow-md transition-shadow`}>
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
