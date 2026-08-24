"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { packagesData } from "../packagesData";

export default function PackageDetailPage({ params }) {
  const router = useRouter();
  
  // React 19 unwrap params Promise
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;
  
  const pkg = packagesData.find((p) => p.id === id);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!pkg) {
    return (
      <div style={{ padding: "140px 0 80px", textAlign: "center", background: "var(--bg-secondary)", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--primary-color)", marginBottom: "20px" }}>Package Not Found</h1>
          <p style={{ color: "var(--text-body)", marginBottom: "30px" }}>The tour package you are looking for does not exist or has been moved.</p>
          <Link href="/packages" className="btn btn-primary">
            Back to All Packages
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone number.");
      return;
    }
    
    // Format WhatsApp message
    const message = `*Wanderlust Tripping - Package Inquiry*\n\n` +
      `*Package:* ${pkg.name}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Travel Date:* ${formData.date}\n` +
      `*Guests:* ${formData.guests}`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/916235869232?text=${encoded}`, "_blank");

    setIsSubmitted(true);
  };

  return (
    <div>
      {/* 1. Premium Visual Header Banner */}
      <section 
        className="page-banner" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(5, 104, 57, 0.8), rgba(5, 104, 57, 0.9)), url(${pkg.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 0 100px"
        }}
      >
        <div className="container" style={{ textAlign: "left" }}>
          <span className="package-tag" style={{ background: "var(--accent-color)", color: "var(--primary-color)", fontWeight: "bold", padding: "6px 14px", borderRadius: "20px", display: "inline-block", marginBottom: "15px", fontSize: "14px" }}>
            {pkg.tag}
          </span>
          <h1 className="page-banner-title" style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: "0 0 15px 0" }}>{pkg.name}</h1>
          <div style={{ display: "flex", gap: "20px", color: "rgba(255,255,255,0.9)", fontSize: "16px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              ⏱ <strong>Duration:</strong> {pkg.duration}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              📍 <strong>Category:</strong> {pkg.category === "kerala" ? "Kerala Tour" : pkg.category === "adventure" ? "Road Trip" : pkg.category === "trekking" ? "Trek Expedition" : "College IV"}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Page Layout (Two Columns) */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="contact-layout" style={{ gap: "40px" }}>
            
            {/* Left Column: Itinerary Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              
              {/* Overview */}
              <div className="info-card-block" style={{ background: "var(--white)", padding: "30px", borderRadius: "12px", boxShadow: "var(--shadow-sm)" }}>
                <h2 style={{ color: "var(--primary-color)", fontSize: "24px", marginBottom: "15px", position: "relative" }}>
                  Trip Overview
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                  {pkg.desc} Wanderlust Tripping presents this highly-rated itinerary specially designed by our expert local travel designers to give you the most authentic local experience.
                </p>
              </div>

              {/* Day-by-day Timeline */}
              <div className="info-card-block" style={{ background: "var(--white)", padding: "30px", borderRadius: "12px", boxShadow: "var(--shadow-sm)" }}>
                <h2 style={{ color: "var(--primary-color)", fontSize: "24px", marginBottom: "25px" }}>
                  Detailed Day-by-Day Itinerary
                </h2>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "25px", borderLeft: "3px solid rgba(5,104,57,0.15)", paddingLeft: "20px", marginLeft: "10px" }}>
                  {pkg.places.map((place, index) => {
                    const parts = place.split(":");
                    const title = parts[0] || `Day ${index + 1}`;
                    const detail = parts.slice(1).join(":");

                    return (
                      <div key={index} style={{ position: "relative" }}>
                        {/* Timeline Node dot */}
                        <div style={{ 
                          position: "absolute", 
                          left: "-33px", 
                          top: "2px", 
                          width: "22px", 
                          height: "22px", 
                          borderRadius: "50%", 
                          backgroundColor: "var(--accent-color)", 
                          border: "4px solid var(--white)",
                          boxShadow: "0 0 0 2px var(--primary-color)",
                          zIndex: 2
                        }}></div>
                        
                        <h3 style={{ color: "var(--primary-color)", fontSize: "18px", margin: "0 0 8px 0" }}>{title}</h3>
                        <p style={{ color: "var(--text-body)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>{detail || "Leisure, activities, sightseeing, and local culinary experiences planned for the day."}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="booking-form">
                
                {/* Inclusions */}
                <div className="info-card-block" style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", boxShadow: "var(--shadow-sm)", borderTop: "4px solid var(--primary-color)" }}>
                  <h3 style={{ color: "var(--primary-color)", fontSize: "18px", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    🟢 What's Included
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0, margin: 0 }}>
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} style={{ fontSize: "14px", color: "var(--text-body)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <span style={{ color: "var(--primary-color)" }}>✔</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="info-card-block" style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", boxShadow: "var(--shadow-sm)", borderTop: "4px solid #d9534f" }}>
                  <h3 style={{ color: "#d9534f", fontSize: "18px", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    🔴 What's Excluded
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0, margin: 0 }}>
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} style={{ fontSize: "14px", color: "var(--text-body)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <span style={{ color: "#d9534f" }}>✖</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>

            </div>

            {/* Right Column: Sticky Sidebar Booking Widget */}
            <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "30px" }}>
              
              <div className="booking-card" style={{ background: "var(--white)", padding: "30px", borderRadius: "12px", boxShadow: "var(--shadow-md)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 style={{ color: "var(--primary-color)", fontSize: "20px", marginBottom: "5px" }}>Book This Package</h3>
                <p style={{ color: "var(--text-body)", fontSize: "14px", marginBottom: "20px" }}>Submit your details to get a customized tour quote.</p>
                
                {isSubmitted ? (
                  <div style={{ background: "rgba(5, 104, 57, 0.1)", color: "var(--primary-color)", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
                    <h4 style={{ margin: "0 0 10px 0" }}>Inquiry Submitted!</h4>
                    <p style={{ fontSize: "14px", margin: 0, lineHeight: "1.5" }}>Our travel consultant will call you back within 24 hours to finalize your itinerary.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="form-package" style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-dark)" }}>Selected Package</label>
                      <input 
                        type="text" 
                        id="form-package" 
                        value={pkg.name} 
                        disabled 
                        style={{ padding: "10px 14px", border: "1px solid #ccc", borderRadius: "6px", background: "#f5f5f5", cursor: "not-allowed", fontSize: "14px", color: "#666" }}
                      />
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="name" style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-dark)" }}>Your Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        required 
                        style={{ padding: "10px 14px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px" }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="phone" style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-dark)" }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210" 
                        required 
                        style={{ padding: "10px 14px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px" }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="date" style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-dark)" }}>Date *</label>
                        <input 
                          type="date" 
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required 
                          style={{ padding: "10px 10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "13px" }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="guests" style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-dark)" }}>Guests *</label>
                        <select 
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          style={{ padding: "10px 10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "13px", background: "white" }}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="5+">5+ Persons</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "12px", border: "none", fontSize: "14px", marginTop: "10px" }}>
                      Get Free Quote
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Connect Quick Links */}
              <div className="info-card-block" style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
                <h4 style={{ color: "var(--primary-color)", margin: "0 0 15px 0", fontSize: "16px" }}>Need Instant Assistance?</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a 
                    href="https://wa.me/916235769232" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      gap: "8px", 
                      background: "#25d366", 
                      color: "white", 
                      padding: "10px", 
                      borderRadius: "6px", 
                      fontWeight: "bold", 
                      fontSize: "14px"
                    }}
                  >
                    💬 WhatsApp Tour Specialist
                  </a>
                  <a 
                    href="tel:+916235769232" 
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      gap: "8px", 
                      background: "var(--primary-color)", 
                      color: "white", 
                      padding: "10px", 
                      borderRadius: "6px", 
                      fontWeight: "bold", 
                      fontSize: "14px"
                    }}
                  >
                    📞 Call Support
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
