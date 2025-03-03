import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: config => {
    return config;
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
