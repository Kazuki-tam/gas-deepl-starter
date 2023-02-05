import { getUsage } from "./deepl/index.ts";
import type { DeepLUsageFunc, DeepLUsageType } from "./types/deepl.ts";

/**
 * DeepLTranslate function
 */
declare const global: {
  [x: string]: DeepLUsageFunc;
};

/**
 * Retrieve information about your DeepL API usage during the current billing period.
 * @param {DeepLUsageType} type Optional, retrieve the current used amount ("count")
 * @return String explaining usage, or count or limit values as specified by type argument.
 */
function DeepLUsage(type: DeepLUsageType) {
  const response = getUsage(type);
  return response;
}

global.DeepLUsage = DeepLUsage;
