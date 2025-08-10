import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static site generation
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash for static hosting
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Disable features that require server
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
