import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.idntimes.com',
      },
      {
        protocol: 'https',
        hostname: 'ralfvanveen.com',
      },
      {
        protocol: 'https',
        hostname: 'minecraft.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
};

export default nextConfig;
