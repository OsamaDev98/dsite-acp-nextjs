const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost", "dsite.sa"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dsite.sa",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
