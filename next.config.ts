import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/College_match",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
