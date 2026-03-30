import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/prijimacky/terminy-a-kapacita",
        destination: "/prijimacky/terminy-vysledky-a-zapis",
        permanent: true,
      },
      {
        source: "/prijimacky/vysledky-a-zapis",
        destination: "/prijimacky/terminy-vysledky-a-zapis",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aliabdaal.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
