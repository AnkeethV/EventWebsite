export interface EventConfig {
  eventType: string;
  hosts: {
    primary: string;
    secondary?: string;
  };
  title: string;
  tagline?: string;
  greeting: {
    enabled: boolean;
    prefix: string;
    message: string;
    fallbackName: string;
  };
  date: string;
  dateTime: string;
  timezone: string;
  venue: VenueConfig;
  schedule: ScheduleItem[];
  story: StoryConfig;
  gallery: GalleryImage[];
  rsvp: RSVPConfig;
}

export interface VenueConfig {
  name: string;
  address: string;
  mapUrl: string;
  directionsUrl: string;
  image?: string;
}

export interface ScheduleItem {
  time?: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
}

export interface StoryConfig {
  title: string;
  paragraphs: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface RSVPConfig {
  enabled: boolean;
  foodPreferences: string[];
}

export interface Guest {
  id: string;
  name: string;
  displayName?: string;
  maxGuests?: number;
  groupName?: string;
  enabled?: boolean;
}
