import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taylor Made Dreams - Bringing Dreams to Life for Children",
  description: "Taylor Made Dreams is a children's charity bringing dreams to life for children with life-limiting conditions. We provide wish fulfillment, family support, and create lasting memories.",
  keywords: "children's charity, wish fulfillment, Sussex charity, family support, life-limiting conditions",
  openGraph: {
    title: "Taylor Made Dreams",
    description: "Bringing dreams to life for children with shorter lives",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}