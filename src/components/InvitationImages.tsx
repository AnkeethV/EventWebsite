"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationImages() {
  const images = [
    { src: "/gallery/Screenshot 2026-10-01 230911.png", alt: "Invitation Page 1" },
    { src: "/gallery/Screenshot 2026-10-01 231008.png", alt: "Invitation Page 2" },
    { src: "/gallery/Screenshot 2026-10-01 231045.png", alt: "Invitation Page 3" },
  ];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      if (e.key === "ArrowRight") setSelectedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, images.length]);

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
            The Invitation
          </h3>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {images.map((image, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div 
                className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl shadow-md border border-border group bg-white"
                onClick={() => setSelectedIdx(idx)}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain md:object-cover p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center"
          >
          <button 
            className="absolute top-6 right-6 text-foreground p-2 hover:bg-muted rounded-full transition-colors z-50"
            onClick={() => setSelectedIdx(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground p-2 hover:bg-muted rounded-full transition-colors disabled:opacity-30 z-50"
            onClick={() => setSelectedIdx(prev => prev! - 1)}
            disabled={selectedIdx === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground p-2 hover:bg-muted rounded-full transition-colors disabled:opacity-30 z-50"
            onClick={() => setSelectedIdx(prev => prev! + 1)}
            disabled={selectedIdx === images.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full h-[90vh] max-w-4xl px-4 md:px-16">
            <Image 
              src={images[selectedIdx].src} 
              alt={images[selectedIdx].alt} 
              fill 
              className="object-contain"
              priority
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/70 text-sm tracking-widest font-semibold">
            {selectedIdx + 1} / {images.length}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
