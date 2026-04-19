/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/apploria-home.github.io",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
