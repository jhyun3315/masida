/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};