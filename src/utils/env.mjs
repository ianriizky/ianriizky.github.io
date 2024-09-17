import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production"])
    .transform((value) => value || "development"),
});

// Prevent default process.env.NODE_ENV to be parsed on next.config.mjs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { NODE_ENV, ...env } = envSchema.parse(process.env);

export default env;
