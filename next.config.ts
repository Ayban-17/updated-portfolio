import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      // Add your image domains here
      'your-image-domain.com',
      'another-domain.com',
      "images.remotePatterns",
      "www.skyadesigns.co.uk"
    ],
  },
}

export default nextConfig;
