import CopyPlugin from "copy-webpack-plugin";
import { createRequire } from "node:module";
import path from "path";
import env from "./src/utils/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  env,
  images: { unoptimized: true },
  output: "export",
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(
              path.dirname(
                createRequire(import.meta.url).resolve(
                  "pdfjs-dist/package.json",
                ),
              ),
              "cmaps",
            ),
            to: "cmaps/",
          },
          {
            from: path.join(
              path.dirname(
                createRequire(import.meta.url).resolve(
                  "pdfjs-dist/package.json",
                ),
              ),
              "standard_fonts",
            ),
            to: "standard_fonts/",
          },
        ],
      }),
    );

    return config;
  },
};

export default nextConfig;
