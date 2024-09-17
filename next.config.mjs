import env from "./src/utils/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  env,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
