import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import logo from "../public/fr_logo.jpg"
import { Analytics } from "@vercel/analytics/react";

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], });

export const metadata: Metadata = {
  title: "Farah's Links",
  description: "Transforming the Ordinary into the Extraordinary.",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  keywords: ['farahtelebx', 'fr', 'farahmohamed', 'farahui', 'farahux'],
  icons: {
    icon: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718378567/tcmslycsjioyriaz7qwn.jpg",
    apple:
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718378567/tcmslycsjioyriaz7qwn.jpg",
  },
  creator: "Mahmoud Sayed",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718378567/tcmslycsjioyriaz7qwn.jpg",
    ],
    title: "Farah's Links",
    description:
      "Transforming the Ordinary into the Extraordinary.",
    countryName: "Egypt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farah's Links",
    description:
      "Transforming the Ordinary into the Extraordinary.",
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718378567/tcmslycsjioyriaz7qwn.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
