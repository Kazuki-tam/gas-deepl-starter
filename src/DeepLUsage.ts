import { getUsage } from "./deepl/index.ts";
import type { DeepLUsageFunc } from "./types/deepl.ts";

/**
 * DeepLTranslate function
 */
declare const global: {
  [x: string]: DeepLUsageFunc;
};

function DeepLUsage(type: string) {
  const response = getUsage(type);
  return response;
}

global.DeepLUsage = DeepLUsage;
