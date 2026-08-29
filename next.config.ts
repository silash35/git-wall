import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

export default nextConfig;
