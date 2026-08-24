"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isHomepage = pathname === "/";

  return (
    <>
      <header className={`header ${isSticky ? "sticky" : ""} ${isHomepage ? "home-header" : "interior-header"}`} id="header">
        <div className="container nav-wrapper">
          {/* Logo */}
          <Link href="/" className="logo-link" onClick={handleLinkClick}>
            <img 
              src="/wander_lust_logo.png" 
              alt="Wanderlust Tripping Logo" 
              className="logo-img" 
            />
            <div className="logo-text-group">
              <span className="logo-title">WANDERLUST</span>
              <span className="logo-subtitle">Tripping</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`nav-link ${pathname === link.path ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="nav-btn">
            <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "14px" }}>
              CONTACT US
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="menu-toggle-btn"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-sidebar" onClick={(e) => e.stopPropagation()}>
          <button
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            id="menu-close-btn"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`mobile-nav-link ${pathname === link.path ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "auto", borderTop: "1px solid #e5e7eb", paddingTop: "20px" }}>
            <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", marginBottom: "10px" }}>CONTACT US</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
              <a href="tel:+916235869232" style={{ display: "block", fontSize: "15px", color: "#056839", fontWeight: "700" }}>
                +91 62358 69232
              </a>
              <a href="tel:+916235769232" style={{ display: "block", fontSize: "15px", color: "#056839", fontWeight: "700" }}>
                +91 62357 69232
              </a>
              <a href="tel:+917303669232" style={{ display: "block", fontSize: "15px", color: "#056839", fontWeight: "700" }}>
                +91 73036 69232
              </a>
            </div>
            <a href="mailto:info@wanderlusttripping.com" style={{ display: "block", fontSize: "14px", color: "#4b5563" }}>
              info@wanderlusttripping.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
