import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alchemy Unbounded | The Recovery of Capability",
  description:
    "A premium structural transformation journey for those ready to stop performing and start expression. Deep listening and identity rewiring with Harish Narayan.",
  keywords: [
    "transformation coaching",
    "life coaching",
    "creative coaching",
    "embodied coaching",
    "deep listening",
    "somatic work",
    "identity work",
  ],
  authors: [{ name: "Harish Narayan" }],
  creator: "Harish Narayan",
  publisher: "Alchemy Unbounded",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alchemyunbounded.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alchemyunbounded.com",
    siteName: "Alchemy Unbounded",
    title: "Alchemy Unbounded | Deep Transformation Coaching",
    description: "1:1 transformation coaching for creating authentic, aligned lives.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alchemy Unbounded - Transformation Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alchemy Unbounded",
    description: "Deep transformation coaching for creators and seekers",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
