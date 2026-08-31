import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { restaurant } from '@/lib/siteData';

export default function Footer(){
  return <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h4>Roswell Ale House</h4>
          <p>A neighborhood sports bar built for game days, cold drinks, good food, and late-night energy.</p>
          <Link href="/careers">Careers →</Link>
        </div>
        <div>
          <h4>Hours</h4>
          {restaurant.hours.map(([d,h])=><p key={d}><strong>{d}</strong><br/>{h}</p>)}
        </div>
        <div>
          <h4>Find Us On</h4>
          <div className="socials">
            <a href={restaurant.social.instagram} aria-label="Instagram"><Instagram size={18}/></a>
            <a href={restaurant.social.x} aria-label="X">𝕏</a>
            <a href={restaurant.social.yelp} aria-label="Yelp">Y</a>
          </div>
          <p>{restaurant.phone}<br/>{restaurant.email}</p>
        </div>
        <div>
          <h4>Location</h4>

          <div className="footer-map">
            <iframe
              title="Roswell Ale House Location"
              src="https://www.google.com/maps?q=4651%20Woodstock%20Rd%20Ste%20301%2C%20Roswell%2C%20GA%2030075&output=embed"
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="map-address"
            >
              {restaurant.address}
              <br />
              <span>Open in Google Maps →</span>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Roswell Ale House. Placeholder website content can be edited before launch.</div>
    </div>
  </footer>
}
