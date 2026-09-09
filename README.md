# Three Keys Scottsdale — Next.js + React

One-page vacation-rental landing page inspired by the supplied Three Keys Scottsdale card design.

## Includes
- Navy / cream / gold visual identity
- Three property cards
- Direct VRBO booking buttons
- Scottsdale guide
- Upcoming Events section
- Server-side events endpoint that attempts to read the public Experience Scottsdale events page hourly
- Graceful fallback events if the source is unavailable
- Fully responsive mobile layout
- No database
- No admin panel

## Run
npm install
npm run dev

Then open http://localhost:3000

## Events
The endpoint is `/api/events`. It fetches the public Experience Scottsdale events page and caches the response for about one hour. Because the source website can change its HTML structure, the parser is intentionally simple and has a fallback list. This can later be replaced with a proper event feed/API if the client obtains one.

## Replace images
The current property and hero images use Unsplash URLs as temporary visual placeholders. Replace them with the client's real property photography before launch.

The supplied card reference is included as `public/brand-card-reference.jpg` for design reference only.
