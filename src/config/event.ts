import { EventConfig } from "../types/config";

export const eventConfig: EventConfig = {
  eventType: "Wedding",
  hosts: {
    primary: "Aditya",
    secondary: "Swathi",
  },
  title: "Our Special Day",
  tagline: "Together with their families",
  greeting: {
    enabled: true,
    prefix: "Dear",
    message: "We would love to celebrate this special moment with you.",
    fallbackName: "Honoured Guest",
  },
  date: "30 October 2026",
  dateTime: "2026-10-30T00:00:00+05:30",
  timezone: "Asia/Kolkata",
  venue: {
    name: "Pydah Venkata Chalapati Kalyana Mandapam",
    address: "Kakinada, Andhra Pradesh",
    mapUrl: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Pydah+Venkata+Chalapati+Kalyana+Mandapam,+Kakinada,+Andhra+Pradesh&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    directionsUrl: "https://tinyurl.com/4yx33hzu",
    image: "/gallery/background_image.jpeg"
  },
  schedule: [
    {
      title: "Wedding Ceremony",
      image: "/gallery/phereweddingceremony.png"
    },
    {
      title: "Lunch",
      image: "/gallery/dinnerbuffet.png"
    }
  ],
  story: {
    title: "A Little Story",
    paragraphs: [
      "What started as a simple meeting became a journey filled with memories, laughter and countless moments together.",
      "Now, we are excited to celebrate the next chapter with the people who mean the most to us."
    ],
  },
  gallery: [
    { src: "/gallery/ringceremonyengagement.png", alt: "Ring Ceremony" },
    { src: "/gallery/phereweddingceremony.png", alt: "Wedding Ceremony" },
    { src: "/gallery/poolpartyside.png", alt: "Pool Party" },
    { src: "/gallery/dinnerbuffet.png", alt: "Dinner Buffet" },
    { src: "/gallery/venuelawn.png", alt: "Venue Lawn" },
    { src: "/gallery/venuentrace.png", alt: "Venue Entrance" }
  ],
  rsvp: {
    enabled: true,
    foodPreferences: ["Vegetarian", "Non-Vegetarian", "Vegan", "Jain"],
  },
};
