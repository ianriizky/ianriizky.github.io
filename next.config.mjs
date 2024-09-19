import env from "./src/utils/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  env,
  images: { unoptimized: true },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
