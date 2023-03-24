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

//페이지 로딩될때 오른쪽 하단에 뜨던 NextJS 삼각형 돌아가는거 끄기.
module.exports = {
  devIndicators: {
    buildActivity: false,
  },
};