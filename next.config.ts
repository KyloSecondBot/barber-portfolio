import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Old booking-site pages point to their portfolio equivalents.
  async redirects() {
    return [
      { source: "/book", destination: "/contact", permanent: true },
      { source: "/services", destination: "/work", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    // A stray package-lock.json in the home folder confuses root detection.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
