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
        
        <Footer />
      </div>
      )}
    </main>
  );
}
