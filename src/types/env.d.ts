import { envSchema } from "@/utils/env.mjs";
import { z } from "zod";

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends Readonly<z.infer<typeof envSchema>> {
      //
    }
  }
}
