# PRD --- Personalised Event Invitation Website with RSVP

**Document Version:** 1.0\
**Status:** Ready for AI-assisted implementation\
**Product Type:** Mobile-first personalised event invitation website\
**Primary Goal:** Create a beautiful, shareable event invitation that
gives each guest a personalised experience and collects RSVP responses
without requiring the event host to build or maintain a custom backend.

------------------------------------------------------------------------

## 1. Product Overview

Build a modern, elegant, mobile-first event invitation website for an
event such as a wedding, engagement, reception, birthday, anniversary,
or private celebration.

Each guest receives a unique URL containing a guest identifier. When the
guest opens the link, the website should greet them by name and allow
them to RSVP.

The site should combine:

-   A visually polished invitation experience
-   Personalised guest greetings
-   Event details
-   Live countdown
-   Venue/map information
-   Event schedule
-   Short story/about section
-   Photo gallery
-   RSVP form
-   RSVP response storage through a managed/no-custom-backend solution
-   Smooth, tasteful animations
-   Excellent mobile performance
-   Easy configuration so the event owner can change content without
    modifying application logic

The final application should be deployable as a static/modern frontend
application and should not require the event owner to write server-side
code.

------------------------------------------------------------------------

# 2. Product Goals

## Primary Goals

1.  Create an invitation that feels premium and personal rather than
    like a generic website template.
2.  Allow every guest to receive a personalised greeting.
3.  Make all important event information easy to find on a phone.
4.  Make RSVP submission extremely simple.
5.  Store RSVP responses somewhere the event organiser can easily
    review/export.
6.  Provide a reusable architecture where event content can be changed
    through configuration/data rather than rewriting components.
7.  Ensure the website loads quickly even on mobile networks.
8.  Provide polished animations without making the experience
    distracting or slow.

## Secondary Goals

-   Allow the organiser to share individual guest URLs through WhatsApp,
    email, SMS, etc.
-   Allow the organiser to see who has and has not responded.
-   Make the project easy to extend later with additional events,
    multiple functions, reminders, or invitation themes.

------------------------------------------------------------------------

# 3. Non-Goals

The first version should NOT attempt to build:

-   A custom authentication system
-   Guest accounts/passwords
-   A custom server/backend
-   A custom admin dashboard unless easily achievable through the
    selected managed service
-   Online payments
-   Ticketing
-   Complex seating management
-   Full event-management software
-   A messaging/chat system
-   A custom CMS

These may be considered future enhancements.

------------------------------------------------------------------------

# 4. Target Users

## 4.1 Guest

A person receiving the invitation.

They should be able to:

-   Open their personalised invitation link
-   See their name
-   Understand what the event is
-   View date, time, venue and schedule
-   View photos/story
-   Open the venue in a map application
-   Submit or update an RSVP
-   Do all of this comfortably from a phone

## 4.2 Event Organiser

The person creating/managing the invitation.

They should be able to:

-   Configure event details
-   Add guest names/IDs
-   Share personalised links
-   View RSVP submissions
-   Export RSVP data if supported
-   Update event content without changing application logic

------------------------------------------------------------------------

# 5. Recommended Technical Approach

## Architecture

Use a modern frontend framework suitable for static/managed deployment.

Preferred implementation:

-   Next.js or React
-   TypeScript
-   Tailwind CSS or equivalent design system
-   Component-based architecture
-   Responsive/mobile-first CSS
-   Framer Motion or an equivalent lightweight animation library
-   Managed RSVP storage service
-   No custom server required

The AI coding tool may choose an equivalent stack if it provides the
same functionality.

## RSVP Storage

The implementation must use a managed service instead of a custom
backend.

Recommended options, in order of preference:

### Option A --- Managed database/service

Use a service such as Supabase.

The frontend submits RSVP data directly through the service's client
SDK/API.

Requirements:

-   Public RSVP submission must be restricted to the minimum required
    operation.
-   Do not expose privileged service keys in the frontend.
-   Use public/anonymous access only where safe.
-   Configure database policies so guests cannot read other guests' RSVP
    records.
-   Store organiser-facing data securely.

### Option B --- Managed form service

If the AI coding environment or project owner prefers zero database
configuration, use a managed form service such as Formspree, Tally,
Fillout, or an equivalent provider.

Requirements:

-   Form submissions must be stored by the provider.
-   The organiser must be able to view submissions in the provider
    dashboard.
-   The solution must not require writing backend/server code.
-   The provider must support the required fields and preferably CSV
    export.

The implementation should isolate the RSVP integration behind a single
service/module so the provider can be changed later.

Example abstraction:

``` text
rsvpService.submit(response)
```

The UI must not depend directly on provider-specific implementation
details.

------------------------------------------------------------------------

# 6. Personalised Guest Links

## Requirement

Each guest receives a unique URL.

Example:

``` text
https://example.com/invite/ankita
https://example.com/invite/rahul
https://example.com/invite/family-sharma
```

Alternative query-string implementation is acceptable:

``` text
https://example.com/?guest=ankita
```

Prefer path-based URLs for a cleaner invitation experience:

``` text
/invite/[guestId]
```

## Guest Data Model

Each guest should have at minimum:

``` ts
type Guest = {
  id: string;
  name: string;
  displayName?: string;
  maxGuests?: number;
  groupName?: string;
  enabled?: boolean;
};
```

Example:

``` json
{
  "id": "rahul-sharma",
  "name": "Rahul Sharma",
  "maxGuests": 2,
  "enabled": true
}
```

## Personalised Greeting

Example:

> Dear Rahul Sharma,

or:

> Rahul Sharma,\
> We would love to celebrate this special day with you.

The exact copy should be configurable.

## Unknown Guest

If the guest ID is invalid:

-   Do not expose private guest information.
-   Show a graceful generic invitation.
-   Provide a contact/help message.
-   Do not crash the application.

Example:

> We couldn't identify your invitation. You can still view the event
> details, or contact the hosts for your personalised RSVP link.

------------------------------------------------------------------------

# 7. Core User Journey

## Guest Journey

``` text
Open personalised link
        ↓
Animated invitation opening
        ↓
Personalised greeting
        ↓
Event hero
        ↓
Countdown
        ↓
Event details
        ↓
Venue + map
        ↓
Schedule
        ↓
Story
        ↓
Gallery
        ↓
RSVP
        ↓
Submit response
        ↓
Confirmation
```

The user should always be able to access the RSVP section without
scrolling through the entire page.

Include a persistent/floating "RSVP" CTA on mobile if appropriate.

------------------------------------------------------------------------

# 8. Page Structure

The invitation should be a single elegant scrolling page unless there is
a strong implementation reason to split it.

Recommended structure:

1.  Opening/cover
2.  Personalised greeting
3.  Event hero
4.  Countdown
5.  Event details
6.  Venue/map
7.  Schedule
8.  Story
9.  Gallery
10. RSVP
11. Closing message
12. Footer

------------------------------------------------------------------------

# 9. Section Requirements

## 9.1 Opening / Cover

Purpose: Create a strong first impression.

Content:

-   Event title
-   Names
-   Optional event category
-   Date
-   Decorative visual element
-   "Open Invitation" interaction if desired

Example:

``` text
Together with their families

ANKEETH
&
PRIYA

invite you to celebrate their special day

18 DECEMBER 2026
```

The opening should feel elegant and cinematic.

### Animation

Possible sequence:

1.  Background fades in
2.  Decorative elements appear
3.  Names gently animate into view
4.  Date appears
5.  "Open Invitation" CTA becomes visible

Avoid excessive animation.

------------------------------------------------------------------------

# 10. Personalised Greeting Section

After opening the invitation, display the guest's name.

Example:

``` text
Dear Rahul,

Your presence would make our celebration even more special.
```

Requirements:

-   Name comes from the guest identifier.
-   Do not expose internal guest ID.
-   Support names with spaces, punctuation and Indian names.
-   Prevent HTML/script injection from guest data.
-   Provide configurable greeting text.

------------------------------------------------------------------------

# 11. Event Hero

Display:

-   Host/event names
-   Event title
-   Event date
-   Event location
-   Optional hero image
-   Optional event tagline

Example:

``` text
ANKEETH & PRIYA

18 DECEMBER 2026

Bengaluru, Karnataka
```

Visual direction:

-   Elegant typography
-   Large whitespace
-   Strong imagery
-   Subtle decorative elements
-   Premium editorial aesthetic

Avoid:

-   Generic SaaS-style layouts
-   Excessive cards
-   Too many gradients
-   Overly bright UI elements

------------------------------------------------------------------------

# 12. Live Countdown

Display a live countdown to the configured event date/time.

Example:

``` text
120
DAYS

08
HOURS

34
MINUTES

12
SECONDS
```

Requirements:

-   Update every second.
-   Use the event's configured timezone.
-   Handle timezone correctly.
-   Avoid hydration mismatch if using SSR.
-   When the countdown reaches zero, display a configurable message.

Example:

> Today is the day! ❤️

## Configuration

``` ts
eventDateTime: "2026-12-18T18:30:00+05:30"
```

The countdown should not rely solely on the visitor's local timezone.

------------------------------------------------------------------------

# 13. Event Details

Display:

-   Date
-   Day
-   Start time
-   End time if applicable
-   Location
-   Dress code if configured
-   Optional additional notes

Example:

``` text
18 December 2026
Friday
6:30 PM onwards

The Grand Palace
Bengaluru, Karnataka

Dress Code
Traditional / Festive
```

Use icons sparingly.

------------------------------------------------------------------------

# 14. Venue and Map

Display:

-   Venue name
-   Full address
-   Map
-   "Get Directions" CTA

Preferred implementation:

-   Embedded Google Maps or OpenStreetMap/Mapbox equivalent.
-   A direct map link should also be available.

Example:

``` text
The Grand Palace
123 Example Road
Bengaluru, Karnataka

[View on Map]
[Get Directions]
```

The "Get Directions" button should open the appropriate map
application/site.

Do not expose API keys in frontend code if the selected map provider
requires a secret key.

------------------------------------------------------------------------

# 15. Event Schedule

Display the event timeline in chronological order.

Example:

``` text
05:30 PM
Guest Arrival

06:00 PM
Welcome & Ceremony

07:30 PM
Dinner

09:00 PM
Celebration & Music
```

Data structure:

``` ts
type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
  icon?: string;
};
```

The schedule should be easily configurable.

Visual direction:

-   Vertical timeline
-   Elegant separators
-   Small animations as items enter viewport

------------------------------------------------------------------------

# 16. Story Section

Create a short emotional/story section.

Possible content:

-   How the hosts met
-   How the event came to be
-   A short family message
-   Why the celebration is special

Example:

``` text
A Little Story

What started as a simple meeting became a journey filled with
memories, laughter and countless moments together.

Now, we are excited to celebrate the next chapter with the people
who mean the most to us.
```

Requirements:

-   Content must be configurable.
-   Support paragraphs.
-   Optional image.
-   Avoid overly long text on mobile.

------------------------------------------------------------------------

# 17. Photo Gallery

Create a responsive gallery.

Requirements:

-   Support at least 6--20 images.
-   Mobile-friendly grid.
-   Lazy load images.
-   Optimised image sizes.
-   Clicking an image opens a lightbox.
-   Lightbox supports next/previous navigation.
-   Close button must be obvious.
-   Support swipe gestures on mobile if practical.
-   Include meaningful alt text.

Suggested configuration:

``` ts
type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};
```

Do not load full-resolution originals if unnecessary.

Use appropriately sized WebP/AVIF/JPEG assets.

------------------------------------------------------------------------

# 18. RSVP Section

This is one of the most important sections.

## Required Fields

### Guest Name

Pre-filled from the personalised link.

The guest should not normally need to type their name.

Example:

``` text
Guest
Rahul Sharma
```

If group invitations are supported, allow the organiser to configure the
group.

### Attendance

Required.

Options:

``` text
○ Joyfully attending
○ Sorry, unable to attend
```

Alternative wording can be configured.

### Number of Guests

Show only if attending.

Example:

``` text
How many guests will be attending?

[-]  2  [+]
```

Constraints:

-   Minimum: 1
-   Maximum: guest-specific `maxGuests`
-   Default: 1
-   Do not allow values above configured maximum.

For a guest with `maxGuests = 4`, the control should not allow 5.

### Food Preference

Required when attending.

Example:

``` text
Food preference

○ Vegetarian
○ Non-Vegetarian
○ Vegan
○ Jain
○ Other
```

Support configurable options.

If the guest declines attendance, food preference may be hidden or
optional.

### Optional Message

Optional field:

``` text
Message for the hosts
```

Keep this optional.

------------------------------------------------------------------------

# 19. RSVP Validation

Before submission:

-   Attendance must be selected.
-   Guest count must be valid if attending.
-   Food preference must be selected if attending.
-   Optional message has a reasonable character limit.
-   Guest ID must be validated.
-   Prevent accidental duplicate submissions where possible.

Display inline validation.

Example:

> Please select whether you will be attending.

Do not rely only on browser-native validation.

------------------------------------------------------------------------

# 20. RSVP Submission

On submission:

1.  Disable submit button.
2.  Show loading state.
3.  Submit to managed RSVP service.
4.  Handle success.
5.  Handle failure.
6.  Re-enable button if submission fails.

Success message:

> Thank you, Rahul!\
> Your RSVP has been received. We look forward to celebrating with you.
> ❤️

Failure message:

> We couldn't submit your RSVP right now. Please check your connection
> and try again.

Do not lose entered form data when a temporary submission error occurs.

------------------------------------------------------------------------

# 21. RSVP Data Model

Recommended structure:

``` ts
type RSVPResponse = {
  id?: string;
  guestId: string;
  guestName: string;
  attending: boolean;
  guestCount?: number;
  foodPreference?: string;
  message?: string;
  submittedAt: string;
};
```

Optional fields:

``` ts
groupName?: string;
eventId?: string;
```

The stored record should contain enough information for the organiser to
understand the response without needing to decode the URL.

------------------------------------------------------------------------

# 22. Duplicate RSVP Handling

The system should support an invited guest changing their response.

Preferred approach:

-   Use `guestId` + `eventId` as a logical unique combination.
-   If the guest submits again, update their existing response instead
    of creating unlimited duplicates.

If the chosen managed form provider does not support updates:

-   Allow multiple submissions but clearly mark the latest response, or
-   Use a generated RSVP token and a managed database/service.

The implementation should document whichever approach is selected.

------------------------------------------------------------------------

# 23. RSVP Management for Organiser

The organiser should NOT need to inspect application logs.

They should be able to view responses through the selected managed
service.

Minimum information:

  ----------------------------------------------------------------------------
  Guest       Attending      Guest Count Food         Message     Submitted
                                         Preference               
  ----------- ----------- -------------- ------------ ----------- ------------
  Rahul       Yes                      2 Vegetarian   Looking     2026-10-01
  Sharma                                              forward!    

  Priya Nair  No                     --- ---          Sorry!      2026-10-01
  ----------------------------------------------------------------------------

Recommended capabilities:

-   View submissions
-   Filter responses
-   Export CSV
-   Search by guest name
-   See total attending
-   See total guest count
-   See food preference counts

A custom admin dashboard is optional and should not be required for
Phase 1.

------------------------------------------------------------------------

# 24. RSVP Analytics

If supported by the selected managed service, show or enable:

``` text
Invited: 100
Responded: 72
Attending: 61
Not Attending: 11
Expected Guests: 89
```

Food summary:

``` text
Vegetarian: 42
Non-Vegetarian: 39
Vegan: 5
Jain: 3
```

These statistics may initially be handled through the provider dashboard
rather than custom application code.

------------------------------------------------------------------------

# 25. Configuration-Driven Content

The website should separate content from UI components.

Create a central configuration/data structure such as:

``` text
src/
  config/
    event.ts
    guests.ts
```

Example:

``` ts
export const eventConfig = {
  title: "Our Special Day",
  hosts: ["Ankeeth", "Priya"],
  date: "18 December 2026",
  dateTime: "2026-12-18T18:30:00+05:30",
  timezone: "Asia/Kolkata",

  venue: {
    name: "The Grand Palace",
    address: "Bengaluru, Karnataka",
    mapUrl: "...",
    directionsUrl: "..."
  },

  story: {
    title: "A Little Story",
    paragraphs: [
      "..."
    ]
  },

  schedule: [
    {
      time: "05:30 PM",
      title: "Guest Arrival"
    }
  ]
};
```

Guest configuration:

``` ts
export const guests = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    maxGuests: 2
  }
];
```

The AI coding tool should explain clearly where the organiser changes:

-   Names
-   Date
-   Time
-   Venue
-   Map URL
-   Schedule
-   Story
-   Gallery images
-   Guest list
-   RSVP configuration
-   Theme settings

------------------------------------------------------------------------

# 26. Design Direction

The design should feel:

-   Elegant
-   Personal
-   Warm
-   Premium
-   Modern
-   Editorial
-   Mobile-first

Avoid making it look like:

-   A corporate website
-   A generic wedding template
-   A SaaS dashboard
-   A basic HTML invitation

## Typography

Use a combination of:

-   Elegant display/serif font for names/headings
-   Clean sans-serif font for body text

Do not use too many font families.

## Colour System

Create configurable theme variables:

``` text
--background
--foreground
--primary
--secondary
--accent
--muted
```

The organiser should be able to change the palette from one central
configuration.

------------------------------------------------------------------------

# 27. Animation Requirements

Animations should enhance the invitation rather than distract from it.

Use:

-   Fade-in
-   Slide-up
-   Scale-in
-   Staggered text reveals
-   Scroll-triggered section reveals
-   Image transitions
-   Subtle hover effects

Avoid:

-   Excessive bouncing
-   Constant movement
-   Long blocking animations
-   Heavy particle effects
-   Animations that make text difficult to read

## Reduced Motion

Respect:

``` css
prefers-reduced-motion
```

When enabled:

-   Reduce or disable non-essential animation.
-   Keep functional transitions only.

------------------------------------------------------------------------

# 28. Mobile Experience

Mobile is the primary experience.

Target:

-   320px+
-   375px
-   390px
-   414px
-   Large Android phones
-   iPhones
-   Tablets
-   Desktop

Requirements:

-   No horizontal scrolling.
-   Touch-friendly controls.
-   Minimum comfortable tap targets.
-   RSVP controls easy to use with one hand.
-   Gallery must work with touch.
-   Map CTA must be easy to tap.
-   Text must remain readable without zooming.
-   Avoid excessive vertical spacing.
-   Optimise image loading.

------------------------------------------------------------------------

# 29. Responsive Layout

Suggested breakpoints:

``` text
Mobile: < 640px
Tablet: 640px–1024px
Desktop: > 1024px
```

The exact breakpoints may be adjusted according to the selected CSS
framework.

Desktop can use:

-   Wider content area
-   Two-column sections
-   Larger gallery

Mobile should generally use:

-   Single-column layout
-   Full-width images
-   Stacked content
-   Larger touch controls

------------------------------------------------------------------------

# 30. Accessibility

Requirements:

-   Semantic HTML.
-   Proper heading hierarchy.
-   Keyboard navigation.
-   Visible focus states.
-   Form labels.
-   Accessible buttons.
-   Meaningful image alt text.
-   Sufficient colour contrast.
-   Accessible modal/lightbox.
-   Escape key closes lightbox.
-   Screen-reader-friendly RSVP validation.
-   Respect reduced-motion preferences.

Target:

**WCAG 2.1 AA where practical.**

------------------------------------------------------------------------

# 31. Performance

Target:

-   Fast first load.
-   Optimised images.
-   Lazy-loaded gallery.
-   Minimal JavaScript where possible.
-   Avoid unnecessary third-party scripts.
-   Use modern image formats.
-   Compress assets.
-   Avoid loading the entire gallery immediately.

Recommended performance targets:

``` text
LCP: < 2.5s on a reasonable mobile connection
CLS: < 0.1
INP: < 200ms
```

These are targets rather than absolute guarantees because image hosting
and network conditions vary.

------------------------------------------------------------------------

# 32. SEO / Sharing

Although this is primarily a private invitation, configure basic
metadata.

Include:

-   Page title
-   Description
-   Open Graph image
-   Favicon
-   Social sharing image

Example:

``` text
Ankeeth & Priya — Our Special Day
```

When a personalised URL is shared, ideally the preview should still
represent the event rather than expose private guest information.

Do not put the guest's name into Open Graph metadata unless the
architecture intentionally supports secure server-side metadata
generation.

------------------------------------------------------------------------

# 33. Privacy and Security

Important because guest data is personal information.

Requirements:

-   Do not expose the complete guest list publicly.
-   Do not allow one guest to query another guest's information.
-   Never expose service/admin API keys.
-   Validate/sanitise guest identifiers.
-   Escape guest-provided values.
-   Do not store unnecessary personal information.
-   Avoid putting RSVP information in URLs.
-   Do not expose RSVP records through a public API.
-   Use HTTPS in production.
-   Document how to delete RSVP data.

If using Supabase or another database service:

-   Configure row-level/security policies.
-   Separate public submission permissions from organiser read
    permissions.
-   Never use a privileged server/service key in browser code.

------------------------------------------------------------------------

# 34. Guest Data Privacy Consideration

The URL itself should not contain sensitive information.

Good:

``` text
/invite/rahul-sharma
```

Avoid:

``` text
/invite?name=Rahul&phone=9876543210
```

The guest ID should be treated as an identifier, not authentication.

If the organiser needs stronger privacy later, add a private invitation
token.

------------------------------------------------------------------------

# 35. Optional Invitation Token

Future-ready architecture:

``` text
/invite/rahul-sharma?token=unique-token
```

Or:

``` text
/invite/<secure-token>
```

This can prevent casual guessing of invitation URLs.

Do not implement complicated authentication in the first phase unless
required.

------------------------------------------------------------------------

# 36. Error States

Handle:

### Invalid guest

Show generic invitation.

### RSVP service unavailable

Show:

> We couldn't submit your RSVP right now. Please try again in a moment.

### Invalid RSVP data

Show inline validation.

### Missing image

Use graceful placeholder/fallback.

### Countdown failure

Show event date normally without breaking the page.

### Map unavailable

Show address and external directions link.

------------------------------------------------------------------------

# 37. Deployment

Recommended deployment:

-   Vercel
-   Netlify
-   Cloudflare Pages
-   Equivalent static/managed hosting

The AI coding tool should provide exact deployment instructions for the
chosen platform.

Environment variables should be used for any required public
configuration.

Never commit secrets to Git.

Example:

``` text
.env.local
```

Potential variables:

``` text
NEXT_PUBLIC_RSVP_ENDPOINT=
NEXT_PUBLIC_MAP_URL=
```

Only variables explicitly safe for browser exposure should use a public
prefix.

------------------------------------------------------------------------

# 38. Project Structure

Suggested structure:

``` text
event-invitation/
│
├── public/
│   ├── images/
│   ├── gallery/
│   └── favicon/
│
├── src/
│   ├── components/
│   │   ├── InvitationCover
│   │   ├── GuestGreeting
│   │   ├── EventHero
│   │   ├── Countdown
│   │   ├── EventDetails
│   │   ├── Venue
│   │   ├── Schedule
│   │   ├── Story
│   │   ├── Gallery
│   │   ├── RSVPForm
│   │   ├── RSVPConfirmation
│   │   └── Footer
│   │
│   ├── config/
│   │   ├── event.ts
│   │   ├── guests.ts
│   │   └── theme.ts
│   │
│   ├── services/
│   │   └── rsvpService.ts
│   │
│   ├── lib/
│   │   ├── guest.ts
│   │   ├── validation.ts
│   │   └── date.ts
│   │
│   ├── styles/
│   │
│   └── app/
│
├── .env.example
├── README.md
└── package.json
```

The exact structure may vary with the selected framework.

------------------------------------------------------------------------

# 39. Component Requirements

## InvitationCover

Props:

``` ts
event
onOpen
```

Responsibilities:

-   Display opening screen.
-   Animate content.
-   Trigger invitation reveal.

## GuestGreeting

Props:

``` ts
guest
```

Responsibilities:

-   Display personalised name.
-   Handle unknown guest gracefully.

## Countdown

Props:

``` ts
targetDateTime
timezone
```

Responsibilities:

-   Calculate remaining time.
-   Update every second.
-   Handle completed countdown.

## EventDetails

Props:

``` ts
event
```

## Venue

Props:

``` ts
venue
```

Responsibilities:

-   Address
-   Map
-   Directions CTA

## Schedule

Props:

``` ts
schedule
```

## Story

Props:

``` ts
story
```

## Gallery

Props:

``` ts
images
```

Responsibilities:

-   Responsive gallery
-   Lightbox
-   Keyboard/touch interaction

## RSVPForm

Props:

``` ts
guest
event
```

Responsibilities:

-   Form state
-   Validation
-   Submission
-   Loading
-   Success/failure states

------------------------------------------------------------------------

# 40. RSVP Service Abstraction

Create:

``` ts
interface RSVPService {
  submit(response: RSVPResponse): Promise<{
    success: boolean;
    id?: string;
    error?: string;
  }>;
}
```

Implementation:

``` text
rsvpService.ts
    ↓
Managed RSVP Provider
```

This keeps the UI independent from the storage provider.

------------------------------------------------------------------------

# 41. Phase-Based Development Plan

## Phase 0 --- Project Setup

### Goal

Create the project foundation.

### Tasks

-   Initialise project.
-   Configure TypeScript.
-   Configure styling.
-   Configure linting/formatting.
-   Create folder structure.
-   Add base theme variables.
-   Add placeholder event configuration.
-   Add placeholder guest data.
-   Add README.
-   Verify local development.

### Deliverable

A clean running application with the correct architecture.

### Acceptance Criteria

-   Application runs locally.
-   No console errors.
-   TypeScript builds successfully.
-   Configuration files are clearly documented.

------------------------------------------------------------------------

# 42. Phase 1 --- Core Invitation Experience

### Goal

Build the complete visual invitation without RSVP.

### Tasks

Implement:

-   Opening cover
-   Personalised greeting
-   Hero
-   Event details
-   Countdown
-   Venue
-   Schedule
-   Story
-   Gallery
-   Footer

Use realistic placeholder content.

### Acceptance Criteria

-   Page works from top to bottom.
-   Responsive on mobile and desktop.
-   Countdown works.
-   Venue details are visible.
-   Gallery works.
-   No broken images.
-   Sections have polished visual hierarchy.

------------------------------------------------------------------------

# 43. Phase 2 --- Personalised Guest System

### Goal

Make the invitation personalised.

### Tasks

-   Implement guest data model.
-   Implement guest ID routing.
-   Add dynamic guest greeting.
-   Add guest-specific maximum guest count.
-   Handle invalid guest IDs.
-   Ensure guest data is not exposed unnecessarily.

### Test URLs

Example:

``` text
/invite/rahul-sharma
/invite/priya-nair
/invite/family-sharma
/invite/invalid
```

### Acceptance Criteria

For:

``` text
/invite/rahul-sharma
```

the page displays:

> Dear Rahul Sharma

For:

``` text
/invite/priya-nair
```

the page displays:

> Dear Priya Nair

The RSVP maximum must use the corresponding guest configuration.

------------------------------------------------------------------------

# 44. Phase 3 --- RSVP UI

### Goal

Build and validate the RSVP experience before connecting storage.

### Tasks

Implement:

-   Attendance selection
-   Guest count
-   Food preference
-   Optional message
-   Validation
-   Loading state
-   Success state
-   Error state

### Acceptance Criteria

-   Required fields are validated.
-   Guest count respects guest-specific limits.
-   Declining attendance hides unnecessary fields.
-   Form is easy to use on mobile.
-   No invalid form can be submitted.

------------------------------------------------------------------------

# 45. Phase 4 --- Managed RSVP Storage

### Goal

Connect RSVP submissions to a managed service.

### Tasks

1.  Select managed provider.
2.  Create RSVP destination/database/form.
3.  Configure required fields.
4.  Add environment configuration.
5.  Implement `rsvpService`.
6.  Connect form submission.
7.  Test successful submission.
8.  Test failed submission.
9.  Test duplicate/update behaviour.
10. Verify organiser can see responses.

### Acceptance Criteria

Submitting:

``` text
Guest: Rahul Sharma
Attending: Yes
Guests: 2
Food: Vegetarian
Message: Looking forward!
```

creates a corresponding organiser-visible record.

No custom backend server should be required.

------------------------------------------------------------------------

# 46. Phase 5 --- Animation and Premium Visual Polish

### Goal

Turn the functional website into a polished invitation.

### Tasks

-   Add entrance animations.
-   Add scroll reveal.
-   Animate schedule timeline.
-   Add gallery transitions.
-   Improve typography.
-   Improve spacing.
-   Add decorative details.
-   Add RSVP success animation.
-   Add reduced-motion support.

### Acceptance Criteria

-   Animations are smooth.
-   No animation blocks usability.
-   Reduced-motion users receive an accessible experience.
-   Page remains performant on mobile.

------------------------------------------------------------------------

# 47. Phase 6 --- Mobile and Performance Optimisation

### Goal

Optimise for real-world mobile usage.

### Tasks

Test:

-   320px viewport
-   375px viewport
-   390px viewport
-   414px viewport
-   Tablet
-   Desktop

Optimise:

-   Images
-   Fonts
-   JavaScript
-   Lazy loading
-   Gallery
-   Animation performance
-   Layout shifts

### Acceptance Criteria

-   No horizontal scrolling.
-   No overlapping elements.
-   RSVP works comfortably with touch.
-   Images load progressively.
-   Lighthouse/Core Web Vitals are reasonable.
-   No obvious jank during scrolling.

------------------------------------------------------------------------

# 48. Phase 7 --- Accessibility, Privacy and QA

### Goal

Prepare the invitation for real guests.

### Tasks

-   Keyboard test.
-   Screen-reader sanity test.
-   Colour contrast review.
-   Form accessibility review.
-   Reduced-motion test.
-   Invalid guest test.
-   RSVP failure test.
-   Duplicate RSVP test.
-   Mobile browser testing.
-   Privacy/security review.
-   Remove development data.

### Acceptance Criteria

-   No critical accessibility issues.
-   No secrets committed to Git.
-   Guests cannot view other guests' RSVP data.
-   RSVP provider is correctly protected.
-   Production build succeeds.

------------------------------------------------------------------------

# 49. Phase 8 --- Deployment

### Goal

Publish the invitation.

### Tasks

-   Create production repository.
-   Configure environment variables.
-   Deploy.
-   Configure custom domain if desired.
-   Test production URL.
-   Test personalised URLs.
-   Test RSVP.
-   Verify organiser dashboard.
-   Generate final QR/link sharing assets if desired.

### Acceptance Criteria

The organiser can send a URL such as:

``` text
https://example.com/invite/rahul-sharma
```

and the guest can:

1.  Open the invitation.
2.  See their name.
3.  View event information.
4.  View map.
5.  View schedule.
6.  View gallery.
7.  Submit RSVP.
8.  Receive confirmation.

The organiser can see the response without touching application code.

------------------------------------------------------------------------

# 50. Testing Checklist

## Functional

-   [ ] Homepage loads.
-   [ ] Personalised URL loads.
-   [ ] Guest name appears correctly.
-   [ ] Invalid guest handled.
-   [ ] Countdown works.
-   [ ] Countdown reaches zero correctly.
-   [ ] Venue displays.
-   [ ] Map link works.
-   [ ] Directions link works.
-   [ ] Schedule displays chronologically.
-   [ ] Story displays.
-   [ ] Gallery opens.
-   [ ] Lightbox closes.
-   [ ] RSVP validates.
-   [ ] Guest limit works.
-   [ ] Food preference works.
-   [ ] RSVP submits.
-   [ ] RSVP success appears.
-   [ ] RSVP failure appears.
-   [ ] Organiser sees submission.

## Responsive

-   [ ] 320px
-   [ ] 375px
-   [ ] 390px
-   [ ] 414px
-   [ ] Tablet
-   [ ] Desktop

## Accessibility

-   [ ] Keyboard navigation
-   [ ] Focus states
-   [ ] Labels
-   [ ] Alt text
-   [ ] Modal accessibility
-   [ ] Colour contrast
-   [ ] Reduced motion

## Performance

-   [ ] Images optimised
-   [ ] Lazy loading
-   [ ] No layout shift from images
-   [ ] No unnecessary scripts
-   [ ] Smooth scrolling
-   [ ] Fast mobile load

## Security

-   [ ] No secret keys in repository
-   [ ] Guest list not publicly exposed
-   [ ] RSVP records protected
-   [ ] User input sanitised
-   [ ] HTTPS enabled
-   [ ] Provider permissions reviewed

------------------------------------------------------------------------

# 51. Content Configuration Example

The AI coding tool should make it possible to configure the complete
invitation from a small number of files.

Example:

``` ts
export const eventConfig = {
  eventType: "Wedding",

  hosts: {
    primary: "Ankeeth",
    secondary: "Priya"
  },

  title: "Our Special Day",

  greeting: {
    enabled: true,
    prefix: "Dear",
    message:
      "We would love to celebrate this special moment with you."
  },

  dateTime: "2026-12-18T18:30:00+05:30",

  venue: {
    name: "The Grand Palace",
    address: "Bengaluru, Karnataka, India",
    mapUrl: "https://maps.google.com/...",
    directionsUrl: "https://maps.google.com/..."
  },

  schedule: [
    {
      time: "05:30 PM",
      title: "Guest Arrival"
    },
    {
      time: "06:00 PM",
      title: "Ceremony"
    },
    {
      time: "07:30 PM",
      title: "Dinner"
    }
  ],

  story: {
    title: "A Little Story",
    paragraphs: [
      "Our story began...",
      "And now we are excited..."
    ]
  },

  gallery: [
    {
      src: "/gallery/photo-01.webp",
      alt: "..."
    }
  ],

  rsvp: {
    enabled: true,
    foodPreferences: [
      "Vegetarian",
      "Non-Vegetarian",
      "Vegan",
      "Jain"
    ]
  }
};
```

------------------------------------------------------------------------

# 52. Guest Configuration Example

``` ts
export const guests = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    maxGuests: 2
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    maxGuests: 1
  },
  {
    id: "family-sharma",
    name: "The Sharma Family",
    maxGuests: 5
  }
];
```

The organiser should only need to add/edit records like these.

------------------------------------------------------------------------

# 53. Future Enhancements

Do not implement unless explicitly requested, but structure the code so
these are possible later:

## Multiple Events

``` text
/wedding
/reception
/birthday
```

## Multiple Functions

A guest could receive:

``` text
Wedding Ceremony
Reception
Dinner
```

with separate RSVP options.

## WhatsApp Sharing

Generate:

``` text
Hi Rahul! We'd love to invite you to our special day.
Your invitation: <personalised URL>
```

## QR Codes

Generate a QR code for each personalised invitation.

## RSVP Reminder

Allow organiser to identify non-responders and manually send reminders.

## Custom Admin Dashboard

Potential metrics:

-   Total invited
-   Responses
-   Attendance
-   Expected guests
-   Food preferences

## Guest-Specific Content

Different guests/groups could receive different:

-   Schedule
-   Events
-   Plus-one limits
-   Messages
-   Information

------------------------------------------------------------------------

# 54. AI Coding Tool Instructions

The AI coding tool should follow these rules during implementation:

1.  Build one phase at a time.
2.  Do not skip directly to the final implementation.
3.  After each phase, verify that the project builds successfully.
4.  Do not introduce unnecessary dependencies.
5.  Keep event content separate from UI components.
6.  Keep RSVP provider-specific code isolated.
7.  Do not create a custom backend unless absolutely necessary.
8.  Never place secret keys in client-side code.
9.  Make the website mobile-first.
10. Preserve accessibility.
11. Respect reduced-motion settings.
12. Optimise images.
13. Avoid hardcoding guest-specific logic into components.
14. Document configuration changes in README.
15. Use realistic placeholder content until final event content is
    supplied.
16. Do not delete working functionality when implementing later phases.
17. Before completing each phase, run the relevant tests/build/lint
    checks.
18. Explain any required third-party service configuration clearly.
19. If a service requires an account, provide exact setup steps.
20. Never claim RSVP storage works until an actual test submission has
    been verified.

------------------------------------------------------------------------

# 55. Final Definition of Done

The project is complete when:

### Invitation

-   [ ] Beautiful invitation landing/cover
-   [ ] Host/event names
-   [ ] Personalised greeting
-   [ ] Event date
-   [ ] Live countdown
-   [ ] Venue
-   [ ] Map
-   [ ] Directions
-   [ ] Schedule
-   [ ] Story section
-   [ ] Photo gallery
-   [ ] Closing message

### Personalisation

-   [ ] Unique guest links
-   [ ] Guest names displayed
-   [ ] Guest-specific maximum attendance
-   [ ] Invalid guest handling
-   [ ] No public guest list

### RSVP

-   [ ] Attendance selection
-   [ ] Guest count
-   [ ] Food preference
-   [ ] Optional message
-   [ ] Validation
-   [ ] Loading state
-   [ ] Success state
-   [ ] Failure state
-   [ ] Managed RSVP storage
-   [ ] Organiser-accessible responses

### UX

-   [ ] Mobile-first
-   [ ] Responsive
-   [ ] Smooth animations
-   [ ] Reduced-motion support
-   [ ] Accessible forms
-   [ ] Gallery lightbox
-   [ ] Map CTA

### Technical

-   [ ] TypeScript
-   [ ] Component architecture
-   [ ] Configuration-driven content
-   [ ] No custom backend required
-   [ ] Secure environment configuration
-   [ ] Optimised images
-   [ ] Production build succeeds
-   [ ] Deployment documented

------------------------------------------------------------------------

# 56. Suggested Build Order Summary

``` text
PHASE 0
Project setup
        ↓
PHASE 1
Invitation UI
        ↓
PHASE 2
Guest personalisation
        ↓
PHASE 3
RSVP UI + validation
        ↓
PHASE 4
Managed RSVP storage
        ↓
PHASE 5
Animation + visual polish
        ↓
PHASE 6
Mobile + performance
        ↓
PHASE 7
Accessibility + security + QA
        ↓
PHASE 8
Production deployment
```

The AI coding tool should stop at the end of each phase, verify the
implementation, and then continue to the next phase rather than
attempting to generate the entire project blindly in one step.
