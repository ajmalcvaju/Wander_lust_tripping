"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { packagesData } from "./packagesData";

function PackagesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const activeTab = categoryParam || "all";

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "kerala", name: "Kerala Packages" },
    { id: "adventure", name: "Road Trips & Backpacking" },
    { id: "trekking", name: "Trekking Packages" },
    { id: "college-iv", name: "College IV Group Trips" }
  ];



  const destinationParam = searchParams.get("destination");

  const filteredPackages = packagesData.filter(pkg => {
    const matchCategory = activeTab === "all" || pkg.category === activeTab;
    let matchDestination = true;
    if (destinationParam) {
      const q = destinationParam.toLowerCase();
      matchDestination = 
        pkg.name.toLowerCase().includes(q) ||
        pkg.desc.toLowerCase().includes(q) ||
        pkg.places.some(place => place.toLowerCase().includes(q));
    }
    return matchCategory && matchDestination;
  });

  return (
    <div>
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Tour Packages</h1>
          <div className="page-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Packages</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content / Filters & Grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          
          {/* Tabs header */}
          <div className="filter-tabs">
            {categories.map((tab) => (
              <Link
                key={tab.id}
                href={tab.id === "all" ? "/packages" : `/packages?category=${tab.id}`}
                className={`filter-tab ${activeTab === tab.id ? "active" : ""}`}
                style={{ textDecoration: "none" }}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {destinationParam && (
            <div className="search-filter-indicator" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--primary-color)", color: "var(--white)", padding: "12px 20px", borderRadius: "8px", marginBottom: "30px", flexWrap: "wrap", gap: "10px" }}>
              <span>Showing packages matching &ldquo;<strong>{destinationParam}</strong>&rdquo;</span>
              <Link 
                href={`/packages${activeTab !== "all" ? `?category=${activeTab}` : ""}`}
                style={{ color: "var(--accent-color)", fontWeight: "bold", textDecoration: "underline", padding: "4px 8px" }}
              >
                Clear Destination Filter
              </Link>
            </div>
          )}

          {/* Packages Grid */}
          <div className="packages-grid-full">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <div key={pkg.id} className="package-card">
                  <Link href={`/packages/${pkg.id}`} className="package-img-wrapper" style={{ height: "220px", display: "block" }}>
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="package-img" 
                    />
                    <span className="package-tag">{pkg.tag}</span>
                  </Link>
                  <div className="package-details">
                    <h3 className="package-name">
                      <Link href={`/packages/${pkg.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {pkg.name}
                      </Link>
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--text-body)", marginBottom: "16px", lineHeight: "1.5" }}>{pkg.desc}</p>
                    <ul className="package-sublist">
                      {pkg.places.slice(0, 3).map((place, i) => (
                        <li key={i}>{place}</li>
                      ))}
                    </ul>
                    <div className="package-footer" style={{ flexWrap: "wrap", gap: "10px" }}>
                      <span className="package-duration">{pkg.duration}</span>
                      <div className="pkg-btn-group">
                        <Link href={`/packages/${pkg.id}`} className="pkg-btn-itinerary">
                          Itinerary
                        </Link>
                        <Link href={`/contact?destination=${pkg.name}`} className="pkg-btn-book">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "60px 0" }}>
                <h3 style={{ color: "var(--primary-color)", fontSize: "22px", marginBottom: "8px" }}>No Packages Found</h3>
                <p style={{ color: "var(--text-body)" }}>Please try another category or clear your search filters.</p>
              </div>
            )}
          </div>

          {/* Group custom request prompt */}
          <div style={{ marginTop: "60px", background: "var(--primary-color)", color: "#fff", padding: "40px", borderRadius: "var(--border-radius-md)", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
            <h3 style={{ fontSize: "26px", color: "#fff", textTransform: "uppercase", marginBottom: "10px" }}>Need a Custom Itinerary?</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto 24px", fontSize: "16px" }}>
              We specialize in tailor-made packages for families, honeymoons, adventure groups, and corporate groups. Give us your details, and we'll draft it for you.
            </p>
            <Link href="/contact" className="btn btn-accent">
              Request Customized Plan
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Packages() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Loading Tour Packages...</p>
      </div>
    }>
      <PackagesContent />
    </Suspense>
  );
}
