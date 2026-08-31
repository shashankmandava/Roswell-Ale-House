# Roswell Ale House Website

Local Next.js website prototype based on the supplied Roswell Ale House project document.

## Included
- Persistent header with Home, About Us, Menu, Order Online, Events, Offers, and Gallery.
- Persistent footer with Careers, hours, social placeholders, address, and Google Maps link.
- Sports-bar styled homepage using the supplied Roswell Ale House logo.
- Homepage video placeholder with demo auto-scroll behavior.
- Food and Drinks menus with category jump navigation.
- Empty/placeholder Order Online, Weekly Schedule, Sports Calendar, Gallery media, social links, and testimonials.
- Weekly offers from Monday through Sunday.
- Careers form that writes only to Google Cloud Firestore when credentials are configured.
- Responsive mobile navigation.

## Run locally
1. Install Node.js 18.17+ (Node.js 20 LTS recommended).
2. Open a terminal in this folder.
3. Run: `npm install`
4. Run: `npm run dev`
5. Open `http://localhost:3000`
## Firestore setup for Careers
1. Create a Firebase/Google Cloud project with Firestore enabled.
2. Create a service account.
3. Copy `.env.example` to `.env.local`.
4. Fill in `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY`.
5. Restart the local server.

Career applications are saved to the `careerApplications` Firestore collection. The website does not email applications.

## Editable placeholder data
Most temporary restaurant details and menu data are in `lib/siteData.js`.

The supplied logo image is in `public/roswell-ale-house-logo.png`.
