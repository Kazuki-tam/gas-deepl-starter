import { translateWithDeepl } from "./deepl/index.ts";
import type { DeepLTranslateFunc } from "./types/deepl.ts";

/**
 * DeepLTranslate function
 */
declare const global: {
  [x: string]: DeepLTranslateFunc;
};

/**
 * Translates from one language to another using the DeepL Translation API.
 *
 * @param {string} input The text to translate
 * @param {string} sourceLang The language code of the source language
 * @param {string} targetLang The language code of the target language
 * @param {string} glossaryId The ID of a glossary to use
 * @return Translated text
 */
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
