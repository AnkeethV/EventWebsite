import { guests } from "../config/guests";
import { Guest } from "../types/config";

export function lookupGuest(guestId: string | undefined | null): Guest | null {
  if (!guestId) return null;
  // Sanitize: allow alphanumeric and hyphens
  const sanitized = guestId.replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
  
  if (!sanitized) return null;

  const guest = guests.find((g) => g.id.toLowerCase() === sanitized && g.enabled !== false);
  return guest || null;
}
