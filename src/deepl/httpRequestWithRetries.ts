import { sleepForBackoff } from "../utils/sleepForBackoff.ts";
import { FormData, Methods, URLFetchRequestOptions } from "../types/deepl.ts";

/**
 * Execute HTTP requests and retry failed requests.
 * @param {string} authKey DeepL API auth key
 * @return A DeepL-supported target language
 */
const httpRequestWithRetries = (
  authKey: string,
  method: Methods,
  relativeUrl: string,
  formData?: FormData,
  charCount = 0,
) => {
  const baseUrl = authKey.endsWith(":fx")
    ? "https://api-free.deepl.com"
    : "https://api.deepl.com";
  const url = baseUrl + relativeUrl;

  const fetchOptions: URLFetchRequestOptions = {
    method: method,
    muteHttpExceptions: true,
    headers: {
      "Authorization": "DeepL-Auth-Key " + authKey,
    },
    payload: formData,
  };

  let response = null;
  for (let numRetries = 0; numRetries < 5; numRetries++) {
    const lastRequestTime = Date.now();
    try {
      Logger.log(`Sending HTTP request to ${url} with ${charCount} characters`);
      response = UrlFetchApp.fetch(url, fetchOptions);
      const responseCode = response.getResponseCode();
      if (responseCode !== 429 && responseCode < 500) {
        return response;
      }
    } catch (e) {
      // It would be sensible to check whether the exception is retryable here, but there is
      // not so much documentation on Google Apps Script exceptions. In addition, UrlFetchApp
      // fetch timeouts are very long and not configurable.
      throw e;
    }
    Logger.log(`Retrying after ${numRetries} failed requests.`);
    sleepForBackoff(numRetries, lastRequestTime);
  }
  return response;
};

export { httpRequestWithRetries };
