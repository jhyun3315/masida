/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    domain: "https://j8b208.p.ssafy.io/", // 이미지 도메인
  },
  api_domain: "https://j8b208.p.ssafy.io/",
};

module.exports = nextConfig;

const withImages = require("next-images");
module.exports = withImages();

//페이지 로딩될때 오른쪽 하단에 뜨던 NextJS 삼각형 돌아가는거 끄기.
module.exports = {
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
