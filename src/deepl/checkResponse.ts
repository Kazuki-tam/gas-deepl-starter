/**
 * Check response code is OK and if not, throw useful exceptions.
 * @param {GoogleAppsScript.URL_Fetch.HTTPResponse | null} response The response data
 */

const checkResponse = (
  response: GoogleAppsScript.URL_Fetch.HTTPResponse | null,
) => {
  if (!response) return;
  const responseCode = response.getResponseCode();
  if (200 <= responseCode && responseCode < 400) return;

  const content = response.getContentText();

  let message = "";
  try {
    const jsonObj = JSON.parse(content);
    if (jsonObj.message !== undefined) {
      message += `, message: ${jsonObj.message}`;
    }
    if (jsonObj.detail !== undefined) {
      message += `, detail: ${jsonObj.detail}`;
    }
  } catch (error) {
    // JSON parsing errors are ignored, and we fall back to the raw content
    message = ", " + content;
  }

  switch (responseCode) {
    case 403:
      throw new Error(`Authorization failure, check authKey${message}`);
    case 456:
      throw new Error(
        `Quota for this billing period has been exceeded${message}`,
      );
    case 400:
      throw new Error(`Bad request${message}`);
    case 429:
      throw new Error(
        `Too many requests, DeepL servers are currently experiencing high load${message}`,
      );
    default: {
      throw new Error(
        `Unexpected status code: ${responseCode} ${message}, content: ${content}`,
      );
    }
  }
};

export { checkResponse };
