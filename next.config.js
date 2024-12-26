/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    react: {
      version: 19
    }
  }
};

module.exports = nextConfig;
