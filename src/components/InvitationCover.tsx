"use client";

import { useState } from "react";
import { Heart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGuest } from "../context/GuestContext";

interface Props {
  onOpen: () => void;
}

export default function InvitationCover({ onOpen }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const { setDynamicName, guest } = useGuest();

  // If the guest is already known via URL, we can prefill their name
  const [initialized, setInitialized] = useState(false);
  if (!initialized && guest) {
    setNameInput(guest.displayName || guest.name);
    setInitialized(true);
  }

  const handleOpen = () => {
    if (nameInput.trim()) {
      setDynamicName(nameInput.trim());
    }
    setIsOpen(true);
    // Let the animation finish before scrolling if preferred, or just do it right away
    setTimeout(() => onOpen(), 800);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
        >
          {/* Background image - User's 2nd image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/gallery/couple_background.jpeg')] bg-cover bg-center"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 bg-[#fffaf0] p-10 md:p-14 rounded-3xl shadow-2xl max-w-md w-[90%] text-center overflow-hidden"
          >
            {/* Floral Decorative Corners - The user can place these PNGs in public/gallery/ */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/gallery/floral-corner-tr.png')] bg-contain bg-no-repeat opacity-90 mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[url('/gallery/floral-corner-bl.png')] bg-contain bg-no-repeat opacity-90 mix-blend-multiply pointer-events-none" />

            {/* Top decorative heart */}
            <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
              <div className="h-[1px] w-10 bg-[#a88252]/40" />
              <Heart className="w-6 h-6 text-[#a88252] fill-transparent" strokeWidth={1.5} />
              <div className="h-[1px] w-10 bg-[#a88252]/40" />
            </div>

            <h2 className="text-4xl md:text-5xl font-display text-[#8c7355] mb-4 relative z-10">Welcome!</h2>

            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-16 h-[1px] bg-[#a88252]/30" />
            </div>

            <p className="text-xs md:text-sm uppercase tracking-widest text-[#8c7355]/80 mb-8 font-semibold relative z-10">
              Please let us know your name<br />before you continue
            </p>

            <div className="relative mb-8 z-10">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8c7355]/50" />
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-transparent border border-[#d4c4b7] rounded-xl py-4 pl-12 pr-4 text-[#8c7355] placeholder:text-[#8c7355]/40 focus:outline-none focus:border-[#8c7355] focus:ring-1 focus:ring-[#8c7355] transition-all"
              />
            </div>

            <button
              onClick={handleOpen}
              disabled={!nameInput.trim()}
              className="relative z-10 bg-[#a88252] text-white px-12 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-[#8c7355] disabled:opacity-50 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Enter <Heart className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
