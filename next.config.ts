import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone is only for Docker. Leaving it on breaks Vercel NFT tracing
  // (ENOENT next-server.js.nft.json). Set DOCKER=1 in the Dockerfile build.
  ...(process.env.DOCKER === "1" ? { output: "standalone" as const } : {}),
};

export default nextConfig;
