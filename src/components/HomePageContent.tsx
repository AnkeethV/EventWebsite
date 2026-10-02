"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import InvitationCover from "./InvitationCover";
import GuestGreeting from "./GuestGreeting";
import EventHero from "./EventHero";
import Countdown from "./Countdown";
import EventDetails from "./EventDetails";
import Schedule from "./Schedule";
import Venue from "./Venue";
import Story from "./Story";
import InvitationImages from "./InvitationImages";
import FloatingRSVPButton from "./FloatingRSVPButton";
import Footer from "./Footer";

export default function HomePageContent() {
  const [showCover, setShowCover] = useState(true);

  const handleOpen = () => {
    setShowCover(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background flex flex-col w-full overflow-x-hidden">
      {showCover && <InvitationCover onOpen={handleOpen} />}
      
      {!showCover && (
        <div className="relative">
        <EventHero />
        <GuestGreeting />
        <Countdown />
        <EventDetails />
        <Venue />
        <Schedule />
        <Story />
        <InvitationImages />
        
        {/* RSVP Section (Google Form Integration) */}
        <section id="rsvp" className="py-24 bg-background border-t border-primary/10">
          <FadeIn delay={0.2} className="max-w-2xl mx-auto px-6 text-center bg-muted py-16 rounded-2xl border border-border shadow-sm">
            <h3 className="text-3xl md:text-4xl font-display text-accent mb-6">RSVP</h3>
            <p className="text-foreground/70 mb-10 max-w-md mx-auto leading-relaxed">
              We would love to celebrate this special day with you. Please confirm your attendance by filling out our RSVP form.
            </p>
            <a 
              href="https://forms.gle/tr9dCLpkHVzFkEjS9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-background hover:bg-accent/90 hover:scale-105 transition-all px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-sm shadow-md"
            >
              Fill out RSVP Form
            </a>
          </FadeIn>
        </section>

        <Footer />
      </div>
      )}

      <FloatingRSVPButton />
    </main>
  );
}
