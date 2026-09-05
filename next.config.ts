import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables a minimal production server for Docker / container hosts.
  // Vercel ignores this and deploys from source as usual.
  output: "standalone",
};

export default nextConfig;
