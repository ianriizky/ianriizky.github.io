import { envSchema } from "@/utils/env.mjs";
import { z } from "zod";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Readonly<z.infer<typeof envSchema>> {
      //
    }
  }
}
