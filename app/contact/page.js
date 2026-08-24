"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ContactContent() {
  const searchParams = useSearchParams();
  const destParam = searchParams.get("destination") || "";
  const typeParam = searchParams.get("type") || "tours";

  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const [hasTickets, setHasTickets] = useState(false);
  const [formType, setFormType] = useState("tours"); // tours vs hajj-umrah

  // Status message state
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (destParam) {
      setDestination(destParam);
    }
    if (typeParam === "hajj-umrah") {
      setFormType("hajj-umrah");
    }
  }, [destParam, typeParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !phone || !destination) {
      setStatus({
        type: "error",
        message: "Please fill in your Name, Phone Number, and Destination."
      });
      return;
    }

    // Format WhatsApp message
    const message = `*Wanderlust Tripping - Travel Requirements*\n\n` +
      `*Type:* ${formType === "tours" ? "Tours Package" : "Hajj-Umrah"}\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email || "Not provided"}\n` +
      `*Phone:* ${phone}\n` +
      `*Destination:* ${destination}\n` +
      `*Departure From:* ${from || "Not provided"}\n` +
      `*Departure Date:* ${date || "Not provided"}\n` +
      `*Number of Days:* ${days || "Not provided"}\n` +
      `*Flight/Travel Tickets Booked:* ${hasTickets ? "Yes" : "No"}`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/916235869232?text=${encoded}`, "_blank");

    // Success simulation
    setStatus({
      type: "success",
      message: `Thank you, ${name}! Redirecting you to WhatsApp to send your requirements...`
    });

    // Reset fields except destination if prefilled
    setName("");
    setEmail("");
    setPhone("");
    setFrom("");
    setDate("");
    setDays("");
    setHasTickets(false);
  };

  return (
    <div>
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Contact & Booking</h1>
          <div className="page-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. Form & Info Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="contact-layout">
            
            {/* Left: Requirements Booking Form */}
            <div className="booking-card">
              <div className="booking-card-header">
                <span className="booking-tagline">Personalized Tour Packages</span>
                <h2 className="booking-title">Where <span>Do You Want To Go?</span></h2>
                <p style={{ fontSize: "14px", color: "var(--text-body)", marginTop: "8px" }}>
                  Ready to plan your packages with the perfect tour operators? We're here to assist you!
                </p>
              </div>

              {/* Form type tabs */}
              <div className="booking-tabs">
                <button
                  type="button"
                  className={`booking-tab-btn ${formType === "tours" ? "active" : ""}`}
                  onClick={() => setFormType("tours")}
                >
                  Tours Packages
                </button>
                <button
                  type="button"
                  className={`booking-tab-btn ${formType === "hajj-umrah" ? "active" : ""}`}
                  onClick={() => setFormType("hajj-umrah")}
                >
                  Hajj-Umrah
                </button>
              </div>

              {/* Booking form */}
              <form onSubmit={handleSubmit} className="booking-form" id="booking-requirements-form">
                
                {status.type === "success" && (
                  <div className="success-message">
                    {status.message}
                  </div>
                )}

                {status.type === "error" && (
                  <div className="success-message" style={{ backgroundColor: "#fee2e2", borderColor: "#ef4444", color: "#b91c1c" }}>
                    {status.message}
                  </div>
                )}

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="form-name">Name *</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="Enter your name"
                      className="form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="Enter your email"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="form-phone">Phone Number *</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <input
                      id="form-phone"
                      type="tel"
                      placeholder="Enter mobile number"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="form-group">
                  <label htmlFor="form-destination">Destination *</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <input
                      id="form-destination"
                      type="text"
                      placeholder="e.g. Kashmir, Vietnam, Bali"
                      className="form-input"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>

                {/* From Location */}
                <div className="form-group">
                  <label htmlFor="form-from">Departure From</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <input
                      id="form-from"
                      type="text"
                      placeholder="e.g. Kochi, Calicut"
                      className="form-input"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="form-group">
                  <label htmlFor="form-date">Departure Date</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <input
                      id="form-date"
                      type="date"
                      className="form-input"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Number of Days */}
                <div className="form-group">
                  <label htmlFor="form-days">Number of Days</label>
                  <div className="input-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <input
                      id="form-days"
                      type="number"
                      placeholder="e.g. 5"
                      className="form-input"
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="form-group booking-form-col-full" style={{ padding: "8px 0" }}>
                  <label className="form-checkbox-label" htmlFor="form-tickets">
                    <input
                      id="form-tickets"
                      type="checkbox"
                      className="form-checkbox"
                      checked={hasTickets}
                      onChange={(e) => setHasTickets(e.target.checked)}
                    />
                    I have already booked my flight/travel tickets
                  </label>
                </div>

                {/* Submit row */}
                <div className="booking-form-col-full form-submit-row">
                  <button type="submit" className="booking-submit-btn" id="booking-submit-btn">
                    Submit Requirements
                  </button>
                  <button type="button" className="booking-phone-btn" title="Call Us Instantly" id="booking-call-btn">
                    <a href="tel:+916235769232">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </a>
                  </button>
                </div>
              </form>

              <div style={{ marginTop: "24px", borderTop: "1px solid rgba(5, 104, 57, 0.1)", paddingTop: "15px", textAlign: "center" }}>
                <div style={{ fontSize: "14px", fontWeight: "600", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span>Need instant support? Call our hotlines:</span>
                  <span style={{ fontSize: "15px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                    <a href="tel:+916235869232" style={{ color: "var(--primary-color)", fontWeight: "800" }}>+91 62358 69232</a>
                    <span>|</span>
                    <a href="tel:+916235769232" style={{ color: "var(--primary-color)", fontWeight: "800" }}>+91 62357 69232</a>
                    <span>|</span>
                    <a href="tel:+917303669232" style={{ color: "var(--primary-color)", fontWeight: "800" }}>+91 73036 69232</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Office Branches Information */}
            <div className="contact-info-panel">
              <div className="info-card-block">
                <h3>Our Office</h3>
                
                <div className="info-office-item">
                  <h4>Calicut Branch</h4>
                  <p>
                    Wanderlust Tripping LLP,<br />
                    Opposite Reliance Trendz,<br />
                    Kunnamangalam, Kerala - 673571
                  </p>
                  <div style={{ marginTop: "5px", fontSize: "13px", marginBottom: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <strong>Phones:</strong>
                    <a href="tel:+916235869232" style={{ color: "inherit", textDecoration: "none" }}>+91 62358 69232</a>
                    <a href="tel:+916235769232" style={{ color: "inherit", textDecoration: "none" }}>+91 62357 69232</a>
                    <a href="tel:+917303669232" style={{ color: "inherit", textDecoration: "none" }}>+91 73036 69232</a>
                  </div>
                  <div style={{ width: "100%", height: "180px", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(5,104,57,0.15)", marginBottom: "8px" }}>
                    <iframe
                      src="https://maps.google.com/maps?q=Wanderlust%20Tripping%20LLP,%20opposite%20Reliance%20Trendz,%20Kunnamangalam,%20Kerala%20673571&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <a 
                    href="https://maps.google.com/maps?q=Wanderlust%20Tripping%20LLP,%20opposite%20Reliance%20Trendz,%20Kunnamangalam,%20Kerala%20673571" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--primary-color)", fontWeight: "700", textDecoration: "underline" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="info-card-block" style={{ background: "var(--bg-secondary)", borderStyle: "dashed" }}>
                <h3>Why Book With Us?</h3>
                <ul style={{ listStyle: "none", fontSize: "14px", display: "flex", flexDirection: "column", gap: "12px", marginTop: "10px" }}>
                  <li>✔ <strong>100% Customized Plans:</strong> Itineraries drafted by travel enthusiasts who have walked the terrains themselves.</li>
                  <li>✔ <strong>Direct Support:</strong> 24/7 dedicated support representative assigned to your group during travel.</li>
                  <li>✔ <strong>Approved Standards:</strong> Fully accredited by BNI, IATA network systems and state unions.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Loading Booking Form...</p>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
