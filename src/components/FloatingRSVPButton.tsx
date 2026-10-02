"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export default function FloatingRSVPButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const rsvpSection = document.getElementById("rsvp");
      if (rsvpSection) {
        const rect = rsvpSection.getBoundingClientRect();
        // Hide if RSVP section is near or in viewport
        setIsVisible(rect.top > window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToRSVP}
      className="fixed bottom-6 right-6 md:hidden z-40 bg-accent text-background p-4 rounded-full shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
      aria-label="RSVP Now"
    >
      <Mail className="w-5 h-5" />
      <span className="font-semibold tracking-widest text-sm uppercase pr-1">RSVP</span>
    </button>
  );
}
