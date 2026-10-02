"use client";

import { useEffect, useState } from "react";
import { eventConfig } from "../config/event";
import { getTimeRemaining } from "../lib/date";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = eventConfig.dateTime;
    
    // Initial set
    setTimeLeft(getTimeRemaining(target));

    const timer = setInterval(() => {
      const remaining = getTimeRemaining(target);
      setTimeLeft(remaining);

      if (remaining.completed) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  if (timeLeft.completed) {
    return (
      <div className="py-12 text-center">
        <p className="text-2xl md:text-3xl font-display text-accent italic">
          Today is the day! ❤️
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 md:gap-8 text-center">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-display text-foreground mb-2">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-primary font-semibold">
        {label}
      </span>
    </div>
  );
}
