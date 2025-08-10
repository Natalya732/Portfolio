import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/context/theme-context";
import { APP_CONFIG } from "@/shared/constants";

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
    default: "Nikita - Flutter Developer Portfolio",
    template: "%s | Nikita Portfolio",
  },
  description: "A passionate Flutter developer with 4 years of experience building high-performance, cross-platform mobile applications.",
  keywords: ["Flutter", "Mobile Development", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Nikita" }],
  creator: "Nikita",
  openGraph: {
    title: "Nikita - Flutter Developer Portfolio",
    description: "A passionate Flutter developer with 4 years of experience building high-performance, cross-platform mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita - Flutter Developer Portfolio",
    description: "A passionate Flutter developer with 4 years of experience building high-performance, cross-platform mobile applications.",
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
