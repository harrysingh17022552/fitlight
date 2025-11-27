import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc**", // For the export=view link
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/thumbnail**", // For the thumbnail link
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "harishnigam.cloud",
      },
      {
        protocol: "https",
        hostname: "vercel.app",
      },
    ],
  },
};

export default nextConfig;
