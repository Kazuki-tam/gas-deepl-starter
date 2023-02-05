import {
  checkResponse,
  httpRequestWithRetries,
  selectTargetLang,
} from "./index.ts";

import { getPropertiesService } from "../utils/getPropertiesService.ts";

/**
 * Translates from one language to another using the DeepL Translation API.
 *
 * @param {string} input The text to translate
 * @param {string} sourceLang The language code of the source language
 * @param {string} targetLang The language code of the target language
 * @param {string} glossaryId The ID of a glossary to use
 * @return Translated text
 */

const translateWithDeepl = (
  input: string,
  sourceLang?: string,
  targetLang?: string,
  glossaryId?: string,
): string | undefined => {
  const DEEPL_AUTH_KEY = getPropertiesService("DEEPL_AUTH_KEY");
  if (!input) {
    throw new Error("You have to input the text to translate at the least.");
  }
  if (!targetLang) targetLang = selectTargetLang();
  const formData = {
    source_lang: "auto",
    target_lang: targetLang,
    text: input,
    glossary_id: "",
  };
  if (sourceLang && sourceLang !== "auto") {
    formData["source_lang"] = sourceLang;
  }
  if (glossaryId) {
    formData["glossary_id"] = glossaryId;
  }
  const response = httpRequestWithRetries(
    DEEPL_AUTH_KEY,
    "post",
    "/v2/translate",
    formData,
    input.length,
  );
  if (!response) return;
  checkResponse(response);
  const responseObject = JSON.parse(response.getContentText());
  return responseObject.translations[0].text;
};

export { translateWithDeepl };
