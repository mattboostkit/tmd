import type { Metadata } from "next";
import Script from "next/script";
import { Nunito, Source_Sans_3, Caveat } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.taylormadedreams.org.uk";

const headingFont = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700", "800", "900"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const accentFont = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taylor Made Dreams | Children's Charity in Sussex",
    template: "%s | Taylor Made Dreams",
  },
  description:
    "Taylor Made Dreams helps children with life-limiting conditions across Sussex and the South East by funding bucket-list experiences, holistic support, and family wellbeing services.",
  keywords: [
    "children's charity",
    "Sussex charity",
    "life-limiting conditions",
    "wish fulfilment",
    "family support",
    "Taylor Made Dreams",
  ],
  openGraph: {
    title: "Taylor Made Dreams – Bringing Dreams to Life",
    description:
      "Support Taylor Made Dreams to create magical memories for children with life-limiting conditions and provide holistic family support across Sussex.",
    url: siteUrl,
    siteName: "Taylor Made Dreams",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taylor Made Dreams charity supporting children and families",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TaylorMadeDreams",
    title: "Taylor Made Dreams",
    description:
      "Creating magical memories for children with life-limiting conditions across Sussex and the South East.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "charity",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Taylor Made Dreams",
  url: siteUrl,
  logo: `${siteUrl}/og-image.svg`,
  sameAs: [
    "https://www.facebook.com/TaylorMadeDreams",
    "https://www.instagram.com/taylormadedreams",
    "https://www.linkedin.com/company/taylor-made-dreams",
  ],
  areaServed: "GB",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Community Centre, Pine Grove",
    addressLocality: "Crowborough",
    addressRegion: "East Sussex",
    postalCode: "TN6 1FE",
    addressCountry: "GB",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-1892-956460",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} scroll-smooth`}
    >
      <body className="antialiased bg-white text-slate-700">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
      </body>
    </html>
  );
}
