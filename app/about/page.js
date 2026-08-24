import Link from "next/link";

export const metadata = {
  title: "About Us | Wanderlust Tripping",
  description: "Learn more about Wanderlust Tripping, the premier travel agency in Kerala with over a decade of experience creating customized itineraries and memorable trips.",
};

export default function About() {
  const otherServices = [
    "DOMESTIC TOUR PACKAGES",
    "INTERNATIONAL TOUR PACKAGES",
    "ADVENTURE TOURISM IN HIMALAYAS",
    "DMC SERVICES IN HIMACHAL, KASHMIR, DELHI, LAKSHADWEEP, KERALA",
    "HOTEL & RESORTS (WAYANAD, MANALI, OOTY, SRINAGAR)",
    "TICKETING AND VISA SERVICES",
    "BIKE RENTAL",
    "RAFTING",
    "RESORT BOOKINGS"
  ];

  return (
    <div>
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">About Us</h1>
          <div className="page-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* 2. Company Story & Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="about-snip" style={{ gridTemplateColumns: "1.1fr 0.9fr", gap: "60px" }}>
            <div>
              <span className="section-subtitle">Our Journey</span>
              <h2 className="about-desc-heading" style={{ fontSize: "36px", marginBottom: "20px" }}>Decade of Travel Excellence</h2>
              <p className="about-text" style={{ fontSize: "17px", fontWeight: "500", color: "var(--text-dark)", marginBottom: "16px" }}>
                We are committed to providing you with the best possible service and creating unforgettable memories.
              </p>
              <p className="about-text">
                Wanderlust Tripping has been in the travel and tourism industry for over a decade, which means we have a lot of experience under our belt. Every year, we have the pleasure of serving more than 10,000 happy customers, and we take pride in our ability to create custom itineraries that cater to your specific needs.
              </p>
              <p className="about-text">
                Our properties in North Indian states like Kashmir and Manali give us a unique perspective and valuable experience that sets us apart from the competition. Whether you are looking for a relaxing beach vacation, a high-altitude trek, or a structured group tour, our specialized planners will guide you at every step.
              </p>
            </div>
            
            <div style={{ background: "var(--bg-secondary)", padding: "40px", borderRadius: "var(--border-radius-md)", border: "1px solid rgba(5, 104, 57, 0.1)" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "800", textTransform: "uppercase", marginBottom: "20px", color: "var(--primary-color)" }}>Our Network</h3>
              <p className="about-text" style={{ marginBottom: "24px" }}>
                With our main office located in Kunnamangalam, Kozhikode (Calicut), we hold a strong ground network. We also maintain local coordinates in top Indian destinations to support travelers in real-time.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  "Kozhikode (HQ)", "Manali", "Wayanad",
                  "Srinagar", "Delhi", "Ooty"
                ].map((branch, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--text-dark)" }}>
                    <svg width="16" height="16" fill="currentColor" style={{ color: "var(--accent-color)" }} viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {branch}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key highlights block */}
          <div className="about-features">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="feature-title">10+ Years Trust</h3>
              <p className="feature-desc">Over a decade of operations providing dependable, safety-checked, and premium travel arrangements.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="feature-title">10k+ Happy Clients</h3>
              <p className="feature-desc">Delivering smile-filled vacations for families, honeymooners, and student groups across the globe.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
              <h3 className="feature-title">Custom Itineraries</h3>
              <p className="feature-desc">Tailoring flights, transport, transfers, local stays, and experiences entirely to match your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Other Services Grid Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid rgba(5, 104, 57, 0.05)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <span className="section-subtitle">Full Services List</span>
            <h2 className="section-title">Our Other Services</h2>
            <p style={{ marginTop: "10px", fontSize: "16px", maxWidth: "600px", margin: "10px auto 0" }}>
              Beyond core tour packages, we support travelers with comprehensive ground assistance and operations.
            </p>
          </div>

          <div className="services-list-grid">
            {otherServices.map((service, idx) => (
              <div key={idx} className="service-card-item">
                <div className="service-card-bullet"></div>
                <h4 className="service-card-text">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
