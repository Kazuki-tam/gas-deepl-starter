import { checkResponse, httpRequestWithRetries } from "./index.ts";
import { getPropertiesService } from "../utils/getPropertiesService.ts";
import { deepLUsageTypeSchema } from "../schemas/deeplSchema.ts";
import type { DeepLUsageType } from "../types/deepl.ts";

/**
 * Retrieve information about your DeepL API usage during the current billing period.
 * @param {DeepLUsageType} type Optional, retrieve the current used amount ("count")
 * @return String explaining usage, or count or limit values as specified by type argument.
 */
const getUsage = (type: DeepLUsageType): number | string | undefined => {
  deepLUsageTypeSchema.parse(type);

  const DEEPL_AUTH_KEY = getPropertiesService("DEEPL_AUTH_KEY");
  const response = httpRequestWithRetries(DEEPL_AUTH_KEY, "get", "/v2/usage");
  if (!response) return;
  checkResponse(response);

  const responseObject = JSON.parse(response.getContentText());
  const charCount = responseObject.character_count;
  const charLimit = responseObject.character_limit;
  if (charCount === undefined || charLimit === undefined) {
    throw new Error("Character usage not found.");
  }
  if (type) {
    if (type === "count") return charCount;
    if (type === "limit") return charLimit;
  }
  return `${charCount} of ${charLimit} characters used.`;
};

export { getUsage };
