import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/apploria-home.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
