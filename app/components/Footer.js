import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" style={{ display: "inline-block" }}>
              <img 
                src="/wander_lust_logo.png" 
                alt="Wanderlust Tripping Logo" 
                style={{ maxHeight: "50px", maxWidth: "160px", objectFit: "contain", display: "block", marginBottom: "8px" }} 
              />
            </Link>
          </div>
          <div className="footer-socials">
            <a href="https://facebook.com/wanderlusttripping" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://instagram.com/wanderlusttripping" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="footer-grid">
          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="footer-col-title">Info</h4>
            <ul className="footer-links">
              <li><Link href="/packages?category=kerala">Kerala Packages</Link></li>
              <li><Link href="/packages?category=adventure">Adventure Road Trips</Link></li>
              <li><Link href="/destinations?tab=international">International Tours</Link></li>
              <li><Link href="/contact?type=hajj-umrah">Hajj-Umrah</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Our Office */}
          <div>
            <h4 className="footer-col-title">Our Office</h4>
            <p className="footer-address">
              <strong>CALICUT BRANCH</strong>
              Wanderlust Tripping LLP,<br />
              Opposite Reliance Trendz, Kunnamangalam,<br />
              Kerala - 673571<br />
              <a 
                href="https://maps.google.com/maps?q=Wanderlust%20Tripping%20LLP,%20opposite%20Reliance%20Trendz,%20Kunnamangalam,%20Kerala%20673571" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "var(--accent-color)", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", marginTop: "4px" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                View on Google Maps
              </a>
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contacts-list" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <strong>Call Us:</strong>
              <a href="tel:+916235869232">+91 62358 69232</a>
              <a href="tel:+916235769232">+91 62357 69232</a>
              <a href="tel:+917303669232">+91 73036 69232</a>
              <a href="mailto:info@wanderlusttripping.com" style={{ marginTop: "4px" }}>
                <strong>Email:</strong> info@wanderlusttripping.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Wanderlust Tripping. All rights reserved.</p>
          <p>Branches: Kozhikode | Manali | Wayanad | Srinagar | Delhi | Ooty</p>
        </div>
      </div>
    </footer>
  );
}
