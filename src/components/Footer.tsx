import { eventConfig } from "../config/event";

export default function Footer() {
  return (
    <footer className="py-12 bg-background text-center border-t border-primary/10">
      <div className="max-w-xl mx-auto px-6">
        <h3 className="text-3xl font-display text-accent mb-4">
          {eventConfig.hosts.primary} &amp; {eventConfig.hosts.secondary}
        </h3>
        <p className="text-foreground/50 text-sm tracking-widest uppercase mb-6">
          {eventConfig.date}
        </p>
        <p className="text-foreground/40 text-xs">
          Made with love for our special day.
        </p>
      </div>
    </footer>
  );
}
