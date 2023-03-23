/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  swcMinify: true,
};