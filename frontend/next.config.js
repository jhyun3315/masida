/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // loader: "imgix",
    // domain: "https://j8b208.p.ssafy.io/", // 이미지 도메인
    loader: "akamai",
    path: "/",
  },
  // api_domain: "https://j8b208.p.ssafy.io/",
  // webpack5: true,

//페이지 로딩될때 오른쪽 하단에 뜨던 NextJS 삼각형 돌아가는거 끄기.
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/cocktail-worldcup": { page: "/worldcup" },
  //     "/mypage": { page: "/mypage" },
  //     "/search": { page: "/search" },
  //     "/theme": { page: "/theme" },
  //     "/user-analysis": { page: "/user-analysis" },
  //     "/detail": { page: "/detail", query: { id: "cocktail-id" } },
  //   };
  // },
  trailingSlash: true,
};

const withImages = require("next-images");
(module.exports = nextConfig), withImages;
