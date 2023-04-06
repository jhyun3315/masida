/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.namu.wiki",
        port: "",
        pathname: "/i/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/cocktail-worldcup": { page: "/cocktail-worldcup" },
      "/mypage": { page: "/mypage" },
      "/search": { page: "/search" },
      "/theme": { page: "/theme" },
      "/user-analysis": { page: "/user-analysis" },
      "/detail": { page: "/detail", query: { id: "cocktail-id" } },
    };
  },
};

module.exports = nextConfig;
