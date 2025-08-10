import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nikita - Web Developer Portfolio",
    template: "%s | Nikita Portfolio",
  },
  description: "A passionate Web developer with 3.5 years of experience building high-performance, cross-platform web applications.",
  keywords: ["Web", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Nikita" }],
  creator: "Nikita",
  openGraph: {
    title: "Nikita - Web Developer Portfolio",
    description: "A passionate Web developer with 3.5 years of experience building high-performance, cross-platform web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita - Web Developer Portfolio",
    description: "A passionate Web developer with 3.5 years of experience building high-performance, cross-platform web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
