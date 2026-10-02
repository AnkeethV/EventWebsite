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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-3xl"
        >
          {/* Background image - User's 2nd image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/gallery/pop_up_image.png')] bg-cover bg-center blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 bg-[#FDFBF7] p-10 md:p-14 rounded-3xl shadow-2xl max-w-md w-[90%] text-center overflow-hidden border border-[#E8DCC4]"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(179, 139, 89, 0.05)"
            }}
          >
            {/* Floral Decorative Corners using SVGs so they don't break if images are missing */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-80 pointer-events-none transform translate-x-4 -translate-y-4">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="20" r="30" fill="#F4D3D3" filter="blur(8px)"/>
                <circle cx="60" cy="40" r="20" fill="#E8B4B8" filter="blur(4px)"/>
                <path d="M70 10 Q90 30 60 50" stroke="#C49A74" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-80 pointer-events-none transform -translate-x-4 translate-y-4">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="80" r="30" fill="#F4D3D3" filter="blur(8px)"/>
                <circle cx="40" cy="60" r="20" fill="#E8B4B8" filter="blur(4px)"/>
                <path d="M30 90 Q10 70 40 50" stroke="#C49A74" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>

            {/* Top decorative heart */}
            <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
              <div className="h-[1px] w-12 bg-[#B38B59]/30" />
              <Heart className="w-5 h-5 text-[#B38B59]" strokeWidth={2} fill="none" />
              <div className="h-[1px] w-12 bg-[#B38B59]/30" />
            </div>

            <h2 className="text-4xl md:text-5xl font-display text-[#8c6b45] mb-4 relative z-10">Welcome!</h2>

            <div className="flex items-center justify-center gap-2 mb-8 relative z-10">
              <div className="h-[1px] w-16 bg-[#B38B59]/20" />
              <div className="w-2 h-2 rounded-full border border-[#B38B59]/30" />
              <div className="h-[1px] w-16 bg-[#B38B59]/20" />
            </div>

            <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#8c6b45]/80 mb-8 font-medium relative z-10 leading-relaxed">
              Please let us know your name<br />before you continue
            </p>

            <div className="relative mb-8 z-10">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c6b45]/60" strokeWidth={1.5} />
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-[#FDFBF7]/80 border border-[#d4c4b7] rounded-xl py-4 pl-12 pr-4 text-[#8c6b45] placeholder:text-[#8c6b45]/40 focus:outline-none focus:border-[#B38B59] focus:ring-1 focus:ring-[#B38B59] transition-all font-light"
              />
            </div>

            <button
              onClick={handleOpen}
              disabled={!nameInput.trim()}
              className="relative z-10 bg-[#B38B59] text-white px-12 py-3.5 rounded-full uppercase tracking-widest text-sm hover:bg-[#9c774a] disabled:opacity-50 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              Enter <Heart className="w-4 h-4" strokeWidth={1.5} fill="none" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
