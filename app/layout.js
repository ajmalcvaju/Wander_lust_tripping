import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Wanderlust Tripping | Premium Tours & Travels in Kerala & Worldwide",
    template: "%s | Wanderlust Tripping",
  },
  description: "Wanderlust Tripping is the best travel agency in Kerala. We specialize in Kerala packages, domestic group itineraries, adventure treks, road trips, and international destinations.",
  keywords: ["travel agency Kerala", "Kerala tour packages", "trekking India", "road trips Himalayas", "domestic itineraries", "international tours", "Wanderlust Tripping"],
  authors: [{ name: "Wanderlust Tripping Team" }],
  creator: "Wanderlust Tripping",
  publisher: "Wanderlust Tripping",
  metadataBase: new URL("https://www.wanderlusttripping.com"),
  openGraph: {
    title: "Wanderlust Tripping | Premium Tours & Travels",
    description: "Plan your dream destination with Wanderlust Tripping. Explore curated domestic and international tour packages.",
    url: "https://www.wanderlusttripping.com",
    siteName: "Wanderlust Tripping",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wander_lust_logo.png" type="image/png" />
      </head>
      <body>
        <Header />
        <main style={{ flex: "1 0 auto" }}>
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
