import { Guest } from "../types/config";

export const guests: Guest[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    maxGuests: 2,
    enabled: true,
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    maxGuests: 1,
    enabled: true,
  },
  {
    id: "family-sharma",
    name: "The Sharma Family",
    maxGuests: 5,
    groupName: "Sharma Family",
    enabled: true,
  },
];
