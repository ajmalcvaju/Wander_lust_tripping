"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { packagesData } from "./packages/packagesData";

const SLIDES = [
  {
    tagline: "Wanderlust Tripping",
    title: "THE PERFECT TOURS AND TRAVELS IN KERALA",
    desc: "Experience the lush green tea gardens of Munnar, the calm misty meadows of Vagamon, and the tranquil houseboat cruises of Alleppey. Plan your perfect Kerala getaway with our expert guides.",
    bg: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=80"
  },
  {
    tagline: "Explore Your Dreams",
    title: "EXPLORE YOUR DREAM DESTINATION WITH US",
    desc: "From the snow-capped Himalayan ridges to exotic tropical beaches, we design tailormade domestic and international packages that fit your small group size and budget perfectly.",
    bg: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80"
  },
  {
    tagline: "International Gateways",
    title: "JOURNEY BEYOND BOUNDARIES",
    desc: "Embark on thrilling international journeys to Vietnam, Thailand, Maldives, Bali, UAE, and Malaysia. Let us handle your flights, visas, and itineraries seamlessly.",
    bg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
  }
];

export default function Home() {
  const router = useRouter();
  
  const featuredPackages = packagesData.filter(pkg => 
    pkg.id === "k-3" || pkg.id === "a-3" || pkg.id === "c-3"
  );
  
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    console.log("HOMEPAGE MOUNTED ON CLIENT");
  }, []);

  useEffect(() => {
    console.log("Setting up slide timer for slide:", currentSlide);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => {
      console.log("Clearing slide timer for slide:", currentSlide);
      clearInterval(timer);
    };
  }, [currentSlide]);

  // Search Widget State
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedPackageId, setSelectedPackageId] = useState("");

  const filteredSearchPackages = useMemo(() => {
    if (!searchCategory) return packagesData;
    const filtered = packagesData.filter(pkg => pkg.category === searchCategory);
    return filtered.length > 0 ? filtered : packagesData;
  }, [searchCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedPackageId) {
      router.push(`/packages/${selectedPackageId}`);
    } else if (searchCategory) {
      router.push(`/packages?category=${searchCategory}`);
    } else {
      router.push("/packages");
    }
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      q: "HOW DO I ORGANIZE MY TRIP?",
      a: "Start by selecting your preferred packages on our website or filling out the custom booking form on our Contact Us page. Alternatively, call us directly at +91 6235 669 232, and our expert tour designers will customize an itinerary for you."
    },
    {
      q: "WHAT ARE THE PACKAGES YOU OFFER?",
      a: "We offer comprehensive Kerala packages, domestic fit & small group itineraries (covering Manali, Kashmir, Meghalaya, Sikkim, Goa, etc.), trekking and road trip adventure packages, and international destinations (such as Thailand, Maldives, Bali, UAE, Vietnam, Bhutan, and Malaysia)."
    },
    {
      q: "WHAT ABOUT THE PAYMENT PROCESS?",
      a: "We accept payments via bank transfer, credit/debit cards, and UPI (GPay, PhonePe, Paytm). Usually, a 50% advance payment is required to confirm bookings, and the remaining balance is settled before the travel starts."
    },
    {
      q: "IS THERE A CANCELLATION POLICY POSSIBLE AFTER BOOKING?",
      a: "Yes, we have a clear cancellation policy. Bookings cancelled 30 days or more prior to departure receive a full refund minus minimal admin booking charges. For cancellations closer to the travel date, refunds are subject to hotel and transport partner cancellation fees."
    },
    {
      q: "WHAT SHOULD I DO TO BOOK MY TRIP WITH YOU?",
      a: "Browse our packages, choose your destination, and fill out the requirements form with your name, phone number, travel dates, and group size. A customer success representative will contact you within 24 hours to guide you through the reservation."
    }
  ];

  // Video Modal State
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Destinations List for Auto-Slider
  const destinations = [
    { name: "Bahrain", img: "/bahrain.png" },
    { name: "Thailand", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&h=700&q=80" },
    { name: "Europe", img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=600&h=700&q=80" },
    { name: "Malaysia", img: "/malaysia.png" },
    { name: "Vietnam", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&h=700&q=80" },
    { name: "Bali", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&h=700&q=80" },
    { name: "Maldives", img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&h=700&q=80" },
    { name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&h=700&q=80" }
  ];

  // Auto-scroll Destinations Slider
  useEffect(() => {
    const container = document.getElementById("destinations-slider");
    if (!container) return;

    let isHovered = false;
    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    const interval = setInterval(() => {
      if (isHovered) return;

      const cardWidth = container.querySelector(".destination-card")?.offsetWidth || 300;
      const gap = 24;
      const step = cardWidth + gap;

      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += step;
      }
    }, 3500);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleScrollDestinations = (direction) => {
    const container = document.getElementById("destinations-slider");
    if (!container) return;
    const cardWidth = container.querySelector(".destination-card")?.offsetWidth || 300;
    const gap = 24;
    const step = cardWidth + gap;

    if (direction === "left") {
      container.scrollLeft -= step;
    } else {
      container.scrollLeft += step;
    }
  };

  return (
    <div>
      {/* 1. Hero Slider Section */}
      <section className="hero-section">
        <div className="slider-container">
          {SLIDES.map((slide, idx) => (
            <div key={idx} className={`slide ${idx === currentSlide ? "active" : ""}`}>
              <div className="slide-bg" style={{ backgroundImage: `url(${slide.bg})` }}></div>
              <div className="slide-overlay"></div>
              <div className="container slide-content-wrapper">
                <div className="slide-content">
                  <span className="hero-tagline">{slide.tagline}</span>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-desc">{slide.desc}</p>
                  <Link href="/contact" className="btn btn-accent">
                    Contact Now
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Doodles overlay */}
        <div className="decorative-doodles">
          <div className="floating-element hot-air-balloon" style={{ display: currentSlide === 0 ? "block" : "none" }}>
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5C30 5 15 22 15 45 C15 65 35 85 50 95 C65 85 85 65 85 45 C85 22 70 5 50 5Z" fill="#ffc107" stroke="#056839" strokeWidth="2"/>
              <path d="M28 25 C35 15 65 15 72 25" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 45 C35 38 65 38 80 45" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
              <rect x="44" y="102" width="12" height="10" rx="2" fill="#8d6e63" stroke="#056839" strokeWidth="1.5"/>
              <line x1="38" y1="90" x2="44" y2="102" stroke="#056839" strokeWidth="1.5"/>
              <line x1="62" y1="90" x2="56" y2="102" stroke="#056839" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="floating-element couple-cutout" style={{ display: currentSlide === 1 ? "block" : "none" }}>
            {/* Travel couple illustration */}
            {/* <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
              <circle cx="100" cy="100" r="80" fill="#faba15" opacity="0.2" />
              <path d="M60 180 C60 120 90 90 90 90 L110 90 C110 90 140 120 140 180 Z" fill="#056839" />
              <circle cx="100" cy="70" r="15" fill="#f5d6c6" />
              <path d="M85 70 C70 55 130 55 115 70" stroke="#faba15" strokeWidth="8" strokeLinecap="round" />
              <text x="100" y="145" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">WANDERLUST</text>
            </svg> */}
          </div>
          <div className="floating-element airplane-trail" style={{ display: currentSlide === 2 ? "block" : "none" }}>
            <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 45 C40 45 70 20 90 5" stroke="#056839" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round"/>
              <path d="M85 3 L95 5 L92 13 L89 7 Z" fill="#056839"/>
            </svg>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="slider-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 2. Search Widget Section */}
      <div className="container search-widget-container">
        <form onSubmit={handleSearch} className="search-widget" id="homepage-search-form">
          <div className="search-group">
            <label htmlFor="search-category">Category</label>
            <select
              id="search-category"
              className="search-select"
              value={searchCategory}
              onChange={(e) => {
                setSearchCategory(e.target.value);
                setSelectedPackageId("");
              }}
            >
              <option value="">Select Category</option>
              <option value="kerala">Kerala Packages</option>
              <option value="adventure">Road Trips & Backpacking</option>
              <option value="trekking">Trekking Packages</option>
              <option value="college-iv">College IV Group Trips</option>
            </select>
          </div>
          
          <div className="search-group">
            <label htmlFor="search-package">Packages</label>
            <select
              id="search-package"
              className="search-select"
              value={selectedPackageId}
              onChange={(e) => setSelectedPackageId(e.target.value)}
            >
              <option value="">Select Package</option>
              {filteredSearchPackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>

      {/* 3. About Snip Section */}
      <section className="section-padding container">
        <div className="about-snip">
          <div className="about-graphics-wrapper">
            <div className="about-green-skew"></div>
            <div className="about-image-card">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&h=900&q=80"
                alt="Wanderlust hiker looking at valley"
                style={{ display: "block" }}
              />
            </div>
            <div className="about-scroll-badge">
              <span>Scroll down for more</span>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4h2v12h-2zm-6 8l1.41-1.41L11 13.17V4h2v9.17l4.58-4.59L19 10l-7 7-7-7z"/>
              </svg>
            </div>
          </div>

          <div className="about-content">
            <span className="section-subtitle">About Us</span>
            <h2 className="about-desc-heading">We Are Wanderlust Tripping</h2>
            <p className="about-text" style={{ fontWeight: 500 }}>
              At Wanderlust Tripping, your journey will start with a concept and end with remarkable memories.
            </p>
            <p className="about-text">
              Suppose you are looking for a family vacation, college industrial tour, or a business trip, as the Best Travel Agency in Kerala with over 10 years of experience. In that case, we can help you experience the journey with all of your needs and expectations met.
            </p>
            <p className="about-text">
              Our team is not just professionals; they are focused on dedication and passion to make your travel expectations come true. From the second you contact us, you can feel the customized services created to make sure that all parts of your trip are perfect.
            </p>
            <Link href="/about" className="btn btn-primary" style={{ marginTop: "15px" }}>
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Our Destinations Grid Section */}
      <section className="section-padding destinations-section" style={{ position: "relative" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-title-group">
              <span className="section-subtitle">Our Destinations</span>
              <h2 className="section-title">Explore the World</h2>
            </div>
            <Link href="/destinations" className="btn btn-outline desktop-only-btn">
              View All
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          <div className="destinations-slider-wrapper" style={{ position: "relative" }}>
            {/* Left navigation arrow */}
            <button 
              onClick={() => handleScrollDestinations("left")} 
              className="slider-arrow arrow-left"
              aria-label="Slide left"
            >
              &#10094;
            </button>

            <div className="destinations-slider" id="destinations-slider">
              {destinations.map((dest, i) => (
                <div key={i} className="destination-card" onClick={() => router.push(`/destinations?tab=international&highlight=${dest.name}`)}>
                  <div className="dest-img-wrapper">
                    <img src={dest.img} alt={dest.name} className="dest-img" />
                  </div>
                  <div className="dest-card-overlay"></div>
                  <div className="dest-card-content">
                    <h3 className="dest-card-title">{dest.name}</h3>
                    <span className="dest-card-link">
                      Explore More
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right navigation arrow */}
            <button 
              onClick={() => handleScrollDestinations("right")} 
              className="slider-arrow arrow-right"
              aria-label="Slide right"
            >
              &#10095;
            </button>
          </div>

          <div className="mobile-only-btn" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Link href="/destinations" className="btn btn-outline" style={{ marginTop: "24px" }}>
              View All
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. International Flight Banner */}
      <section className="banner-section">
        <div className="container banner-content-wrapper">
          <div className="banner-text-content">
            <span className="banner-tag">International Tour Packages</span>
            <h2 className="banner-title">Journey Beyond <span>Boundaries</span></h2>
            <p className="banner-desc">
              At Wanderlust Tripping, we invite you to embark on a thrilling journey and explore the world with us. Our international packages cover everything from luxury escapes to adventure backpackings.
            </p>
            <Link href="/destinations?tab=international" className="btn btn-primary desktop-only-btn">
              Explore International
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          <div className="banner-img-wrapper">
            <img
              className="plane-img"
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80"
              alt="Passenger aircraft flying in cloudless blue sky"
            />
          </div>

          <div className="mobile-only-btn" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Link href="/destinations?tab=international" className="btn btn-primary" style={{ marginTop: "24px" }}>
              Explore International
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Customized Packages Section */}
      <section className="section-padding packages-section">
        <div className="container">
          <div className="section-header" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "24px" }}>
            <div className="section-title-group">
              <span className="section-subtitle" style={{ color: "var(--accent-color)" }}>Featured Packages</span>
              <h2 className="section-title">Design Your Customized Package</h2>
            </div>
            <Link href="/packages" className="btn btn-accent desktop-only-btn">
              View All Packages
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          <div className="packages-grid">
            {featuredPackages.map((pkg, idx) => (
              <div key={idx} className="package-card">
                <Link href={`/packages/${pkg.id}`} className="package-img-wrapper" style={{ display: "block" }}>
                  <img src={pkg.image} alt={pkg.name} className="package-img" />
                  <span className="package-tag">{pkg.tag}</span>
                </Link>
                <div className="package-details">
                  <h3 className="package-name">
                    <Link href={`/packages/${pkg.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {pkg.name}
                    </Link>
                  </h3>
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
            ))}
          </div>

          <div className="mobile-only-btn" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Link href="/packages" className="btn btn-accent" style={{ marginTop: "32px" }}>
              View All Packages
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Corporate Video Section */}
      <section className="section-padding video-section">
        <div className="container text-center" style={{ marginBottom: "40px" }}>
          <span className="section-subtitle">Corporate Video</span>
          <h2 className="section-title">Let's Explore the Story of</h2>
          <h2 className="section-title" style={{ color: "var(--primary-color)", marginTop: "5px" }}>Wanderlust Tripping</h2>
        </div>

        <div className="container">
          <div className="video-player-card">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&h=560&q=80"
              alt="Travel desk poster with map and compass"
              className="video-poster"
            />
            <button
              className="video-play-btn"
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play story video"
              id="corporate-video-play-btn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="video-label-card">
              <h4>Explore the story of <span>Wanderlust Tripping</span></h4>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Tour Partners Slider Section */}
      <section className="section-padding partners-section">
        <div className="container text-center" style={{ marginBottom: "45px" }}>
          <span className="section-subtitle">Our Aviation Network</span>
          <h2 className="section-title">Our Tour Partners</h2>
        </div>

        <div className="partners-slider">
          <div className="partners-track">
            {[
              { name: "Qatar Airways", src: "/partners/qatar.png" },
              { name: "Kuwait Airways", src: "/partners/kuwait.png" },
              { name: "Vietjet Air", src: "/partners/vietjet.png" },
              { name: "Air Asia", src: "/partners/airasia.png" },
              { name: "SriLankan Airlines", src: "/partners/srilankan.png" },
              { name: "Saudia", src: "/partners/saudia.png" },
              { name: "Spicejet", src: "/partners/spicejet.png" },
              { name: "Partner Airline", src: "/partners/partner8.png" },
              { name: "Qatar Airways", src: "/partners/qatar.png" },
              { name: "Kuwait Airways", src: "/partners/kuwait.png" },
              { name: "Vietjet Air", src: "/partners/vietjet.png" },
              { name: "Air Asia", src: "/partners/airasia.png" },
              { name: "SriLankan Airlines", src: "/partners/srilankan.png" },
              { name: "Saudia", src: "/partners/saudia.png" },
              { name: "Spicejet", src: "/partners/spicejet.png" },
              { name: "Partner Airline", src: "/partners/partner8.png" }
            ].map((logo, idx) => (
              <div key={idx} className="partner-logo-card">
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="section-padding faq-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <span className="section-subtitle">Have Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  id={`faq-btn-${idx}`}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Affiliates Section */}
      <section className="section-padding affiliates-section">
        <div className="container">
          <div className="affiliates-wrapper">
            <div className="affiliates-left-img">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&h=900&q=80"
                alt="Backpacker standing on mountain peak looking at range"
              />
            </div>
            <div>
              <span className="section-subtitle" style={{ marginBottom: "12px" }}>Trusted Credentials</span>
              <h2 className="section-title" style={{ marginBottom: "30px" }}>Our Affiliates</h2>
              
              <div className="affiliates-grid">
                {[
                  { name: "IATA", desc: "International Air Transport Association", img: "/affiliates/iata.png" },
                  { name: "BNI", desc: "Business Network International", img: "/affiliates/bni.png", active: true },
                  { name: "Ministry of Hajj", desc: "Approved Tour Operator", img: "/affiliates/hajj.png" },
                  { name: "KUWA", desc: "Kerala Travel Operators Union", img: "/affiliates/kuwa.png" },
                  { name: "IFTTA", desc: "International Forum of Travel Counsel", img: "/affiliates/iftta.png" }
                ].map((aff, i) => (
                  <div key={i} className={`affiliate-logo-card ${aff.active ? "active" : ""}`} title={aff.desc}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", height: "100%", width: "100%" }}>
                      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <img 
                          src={aff.img} 
                          alt={aff.name} 
                          style={{ maxHeight: "90px", maxWidth: "95%", objectFit: "contain", transition: "all 0.3s ease" }} 
                        />
                      </div>
                      <span style={{ fontSize: "10px", color: "#666", fontWeight: "700", textAlign: "center" }}>
                        {aff.name === "BNI" ? "⭐ Active Partner" : "Accredited"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Testimonials Section (Happy Clients) */}
      <section className="section-padding clients-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <span className="section-subtitle">Real Stories</span>
            <h2 className="section-title">Hear It From Our Happy Clients</h2>
          </div>

          <div className="clients-grid">
            {[
              { name: "Aisha & Riya", trip: "Kerala Backwater Tour", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=600&q=80" },
              { name: "Dr. Sameera", trip: "Kashmir Family Package", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=600&q=80" },
              { name: "Hajee Ibrahim", trip: "Hajj & Umrah Pilgrimage", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=600&q=80" },
              { name: "Anjali Dev", trip: "Vagamon Adventure Trek", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=600&q=80" }
            ].map((client, i) => (
              <div key={i} className="client-video-card" onClick={() => setIsVideoModalOpen(true)}>
                <img src={client.img} alt={client.name} className="client-img" />
                {/* Custom Watermark */}
                <div className="client-watermark">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="#faba15" strokeWidth="2" />
                    <path d="M30 65 L45 35 L55 50 L70 30" stroke="#faba15" strokeWidth="4" />
                  </svg>
                </div>
                <div className="client-overlay">
                  <div className="client-play-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "#fff", zIndex: 4 }}>
                    <h4 style={{ fontSize: "18px", fontWeight: "700" }}>{client.name}</h4>
                    <p style={{ fontSize: "12px", color: "var(--accent-color)", fontWeight: "600" }}>{client.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Video Popup Modal */}
      {isVideoModalOpen && (
        <div className="mobile-menu-overlay open" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-player-card" style={{ width: "90%", maxWidth: "800px", zIndex: 1002 }} onClick={(e) => e.stopPropagation()}>
            <button 
              className="mobile-close-btn" 
              onClick={() => setIsVideoModalOpen(false)}
              style={{ position: "absolute", top: "15px", right: "15px", color: "#fff", zIndex: 10, background: "rgba(0,0,0,0.5)", borderRadius: "50%", padding: "5px" }}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <video 
              width="100%" 
              controls 
              autoPlay 
              style={{ display: "block", width: "100%", borderRadius: "8px", aspectRatio: "16/9" }}
            >
              <source src="/demovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
