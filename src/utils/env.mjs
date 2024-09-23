import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production"])
    .transform((value) => value || "production"),
  APP_URL: z.string().transform((value) => value || "https://localhost:3000"),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string(),

  nextImageExportOptimizer_imageFolderPath: z
    .string()
    .optional()
    .transform((value) => value || "public/images"),
  nextImageExportOptimizer_exportFolderPath: z
    .string()
    .optional()
    .transform((value) => value || "out"),
  nextImageExportOptimizer_quality: z
    .string()
    .optional()
    .transform((value) => value || "75"),
  nextImageExportOptimizer_storePicturesInWEBP: z
    .string()
    .optional()
    .transform((value) => value || "true"),
  nextImageExportOptimizer_exportFolderName: z
    .string()
    .optional()
    .transform((value) => value || "nextImageExportOptimizer"),
  nextImageExportOptimizer_generateAndUseBlurImages: z
    .string()
    .optional()
    .transform((value) => value || "true"),
  nextImageExportOptimizer_remoteImageCacheTTL: z
    .string()
    .optional()
    .transform((value) => value || "0"),
});

// Prevent default process.env.NODE_ENV to be parsed on next.config.mjs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { NODE_ENV, ...env } = envSchema.parse(process.env);

export default env;
