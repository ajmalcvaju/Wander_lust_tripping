"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function DestinationsContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") === "domestic" ? "domestic" : "international";
  const highlightedCountry = searchParams.get("highlight") || "";

  const internationalDestinations = [
    {
      country: "Thailand",
      badge: "South East Asia",
      img: "/thailand_destination.png",
      tours: [
        { name: "Phuket - Krabi Adventure", duration: "4n / 5d" },
        { name: "Bangkok - Pattaya Special", duration: "3n / 4d" },
        { name: "Phuket - Krabi - Bangkok", duration: "5n / 6d" },
        { name: "Bangkok - Pattaya Highlights", duration: "4n / 5d" }
      ]
    },
    {
      country: "Vietnam",
      badge: "Far East Asia",
      img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&h=400&q=80",
      tours: [
        { name: "Danang - Hanoi Cultural", duration: "4n / 5d" },
        { name: "Hanoi - Halong Bay Cruise", duration: "4n / 5d" },
        { name: "Hanoi - Sapa Mist Valley", duration: "3n / 4d" },
        { name: "Ho Chi Minh City Lights", duration: "3n / 4d" }
      ]
    },
    {
      country: "Indonesia",
      badge: "Tropical Island",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&h=400&q=80",
      tours: [
        { name: "Bali Classic Escape", duration: "3n / 4d" },
        { name: "Bali - Nusa Penida Island", duration: "4n / 5d" },
        { name: "Bali - Ubud Rainforest", duration: "4n / 5d" }
      ]
    },
    {
      country: "UAE",
      badge: "Middle East",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&h=400&q=80",
      tours: [
        { name: "Dubai City Special", duration: "3n / 4d" },
        { name: "Dubai - Hatta Mountain", duration: "4n / 5d" },
        { name: "Dubai - Abu Dhabi Grand", duration: "4n / 5d" }
      ]
    },
    {
      country: "Malaysia",
      badge: "South East Asia",
      img: "/malaysia_destination.png",
      tours: [
        { name: "Kuala Lumpur City Escape", duration: "2n / 3d" },
        { name: "Kuala Lumpur Explorer", duration: "3n / 4d" },
        { name: "Kuala Lumpur - Langkawi Island", duration: "5n / 6d" }
      ]
    },
    {
      country: "Maldives",
      badge: "Ocean Island",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&h=400&q=80",
      tours: [
        { name: "Luxury Lagoon Villa Stay", duration: "3n / 4d" },
        { name: "Maldives Island Getaway", duration: "2n / 3d" }
      ]
    },
    {
      country: "Bhutan",
      badge: "Himalayas",
      img: "/bhutan_destination.png",
      tours: [
        { name: "Thimphu - Paro Valleys", duration: "4n / 5d" },
        { name: "Thimphu - Punakha Pass", duration: "4n / 5d" },
        { name: "Thimphu - Paro - Punakha Mega", duration: "5n / 6d" }
      ]
    },
    {
      country: "Nepal",
      badge: "Himalayas",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&h=400&q=80",
      tours: [
        { name: "Kathmandu - Pokhara Scenic", duration: "4n / 5d" },
        { name: "Kathmandu - Pokhara Explorer", duration: "5n / 6d" }
      ]
    }
  ];

  const domesticDestinations = [
    {
      region: "Kerala & South India",
      img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&h=400&q=80",
      cities: [
        "Munnar Hill Station",
        "Wayanad Wildlife Sanctuary",
        "Alleppey Houseboats & Backwaters",
        "Cochin Heritage Coast",
        "Thekkady Forest Reserve",
        "Vagamon Pine Meadows",
        "Varkala Beach & Cliffs",
        "Kovalam Sandy Shorelines"
      ]
    },
    {
      region: "Himalayan & North India",
      img: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=600&h=400&q=80",
      cities: [
        "Kashmir (Srinagar, Gulmarg, Sonmarg, Pahalgam)",
        "Himachal (Manali, Kasol, Shimla, Sissu)",
        "Sikkim (Gangtok, Tsomgo Lake, Nathula Pass)",
        "Darjeeling Heritage Tea Gardens",
        "Meghalaya (Shillong, Cherrapunji, Dawki)",
        "Leh Ladakh Highway (Nubra, Pangong Tso)"
      ]
    },
    {
      region: "Indian Cities & Islands",
      img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&h=400&q=80",
      cities: [
        "Lakshadweep Ex-Agatti Island",
        "Andaman Havelock beaches",
        "Goa Coastal party zones",
        "Mumbai - Matheran Hills",
        "Bangalore - Hyderabad urban tours",
        "Delhi - Agra - Jaipur Triangle",
        "Kolkata - Chennai cultural walks"
      ]
    }
  ];

  return (
    <div>
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Travel Destinations</h1>
          <div className="page-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Destinations</span>
          </div>
        </div>
      </section>

      {/* 2. Main Destinations Explorer */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          
          {/* Switch Tab switcher */}
          <div className="destinations-tab-container">
            <div className="destinations-switcher">
              <Link
                href="/destinations?tab=international"
                className={`dest-switch-btn ${activeTab === "international" ? "active" : ""}`}
                style={{ textDecoration: "none" }}
              >
                International Countries
              </Link>
              <Link
                href="/destinations?tab=domestic"
                className={`dest-switch-btn ${activeTab === "domestic" ? "active" : ""}`}
                style={{ textDecoration: "none" }}
              >
                Domestic Cities & Regions
              </Link>
            </div>
          </div>

          {/* Grid display */}
          {activeTab === "international" ? (
            <div className="destination-countries-grid">
              {internationalDestinations.map((dest, idx) => {
                const isHighlighted = highlightedCountry.toLowerCase() === dest.country.toLowerCase();
                return (
                  <div 
                    key={idx} 
                    className="country-card"
                    style={isHighlighted ? { borderColor: "var(--accent-color)", borderWidth: "2px", boxShadow: "0 0 15px rgba(250, 186, 21, 0.4)" } : {}}
                  >
                    <div className="country-img-wrapper">
                      <img src={dest.img} alt={dest.country} className="country-img" />
                      <span className="country-badge">{dest.badge}</span>
                    </div>
                    <div className="country-info">
                      <h3 className="country-name" style={isHighlighted ? { color: "var(--primary-color)" } : {}}>
                        {dest.country} {isHighlighted && "⭐"}
                      </h3>
                      
                      <div className="country-tours-list">
                        {dest.tours.map((tour, tIdx) => (
                          <div key={tIdx} className="country-tour-item">
                            <span className="country-tour-name">{tour.name}</span>
                            <span className="country-tour-duration">{tour.duration}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                        <Link href={`/contact?destination=${dest.country}`} className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
                          Plan {dest.country} Trip
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="destination-countries-grid">
              {domesticDestinations.map((dest, idx) => (
                <div key={idx} className="country-card">
                  <div className="country-img-wrapper">
                    <img src={dest.img} alt={dest.region} className="country-img" />
                    <span className="country-badge" style={{ backgroundColor: "var(--primary-color)", color: "#fff" }}>India</span>
                  </div>
                  <div className="country-info">
                    <h3 className="country-name" style={{ fontSize: "20px", color: "var(--primary-color)" }}>{dest.region}</h3>
                    
                    <div className="country-tours-list" style={{ marginTop: "15px" }}>
                      {dest.cities.map((city, cIdx) => (
                        <div key={cIdx} style={{ padding: "8px 0", borderBottom: "1px dashed rgba(0,0,0,0.06)", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "var(--accent-color)", fontWeight: "bold" }}>✔</span>
                          <span style={{ fontWeight: "500", color: "var(--text-dark)" }}>{city}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                      <Link href={`/contact?destination=${dest.region}`} className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
                        Plan India Trip
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Prompt banner */}
          <div style={{ marginTop: "60px", background: "#fff", padding: "40px", borderRadius: "var(--border-radius-md)", textAlign: "center", border: "1px solid rgba(5, 104, 57, 0.1)", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "10px" }}>Tailor-Made Requests</h3>
            <p style={{ color: "var(--text-body)", maxWidth: "600px", margin: "0 auto 20px" }}>
              Looking for a destination not listed here? Our extensive ground agency network covers all major destinations in Asia, Europe, and the Middle East.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Send Destination Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Destinations() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Loading Destinations...</p>
      </div>
    }>
      <DestinationsContent />
    </Suspense>
  );
}
