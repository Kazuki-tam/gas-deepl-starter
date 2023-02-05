import { translateWithDeepl } from "./deepl/index.ts";
import type { DeepLTranslateFunc } from "./types/deepl.ts";

/**
 * DeepLTranslate function
 */
declare const global: {
  [x: string]: DeepLTranslateFunc;
};

function DeepLTranslate(
  input: string,
  sourceLang?: string,
  targetLang?: string,
  glossaryId?: string,
) {
  const response = translateWithDeepl(
    input,
    sourceLang,
    targetLang,
    glossaryId,
  );
  return response;
}

global.DeepLTranslate = DeepLTranslate;
