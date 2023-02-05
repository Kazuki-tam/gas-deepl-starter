import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  deepLUsageTypeSchema,
  formDataSchema,
  headersSchema,
  methodSchema,
  urlFetchRequestOptionsSchema,
} from "../schemas/deeplSchema.ts";

type Headers = z.infer<typeof headersSchema>;
type Methods = z.infer<typeof methodSchema>;
type FormData = z.infer<typeof formDataSchema>;
type URLFetchRequestOptions = z.infer<typeof urlFetchRequestOptionsSchema>;
type DeepLTranslateFunc = (
  input: string,
  sourceLang?: string | undefined,
  targetLang?: string | undefined,
  glossaryId?: string | undefined,
) => string | undefined;
type DeepLUsageFunc = (type: string) => number | string | undefined;
type DeepLUsageType = z.infer<typeof deepLUsageTypeSchema>;

export type {
  DeepLTranslateFunc,
  DeepLUsageFunc,
  DeepLUsageType,
  FormData,
  Headers,
  Methods,
  URLFetchRequestOptions,
};
