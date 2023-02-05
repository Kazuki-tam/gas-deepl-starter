import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";

const deepLUsageTypeSchema = z.enum(["count", "limit"]);

const methodSchema = z.enum(["get", "delete", "patch", "post", "put"]);

const headersSchema = z.object({
  Authorization: z.string(),
});

const formDataSchema = z.object({
  source_lang: z.string().optional(),
  target_lang: z.string().optional(),
  text: z.string(),
  glossary_id: z.string().optional(),
}).optional();

const urlFetchRequestOptionsSchema = z.object({
  method: methodSchema,
  muteHttpExceptions: z.boolean(),
  headers: headersSchema,
  payload: formDataSchema,
});

export {
  deepLUsageTypeSchema,
  formDataSchema,
  headersSchema,
  methodSchema,
  urlFetchRequestOptionsSchema,
};
