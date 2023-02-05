/**
 * Determines the default target language using the system language.
 * @return A DeepL-supported target language
 * @throws Error If the system language could not be converted to a supported target language
 */
const selectTargetLang = (): string => {
  const targetLangs = [
    "bg",
    "cs",
    "da",
    "de",
    "el",
    "en-gb",
    "en-us",
    "es",
    "et",
    "fi",
    "fr",
    "hu",
    "id",
    "it",
    "ja",
    "lt",
    "lv",
    "nl",
    "pl",
    "pt-br",
    "pt-pt",
    "ro",
    "ru",
    "sk",
    "sl",
    "sv",
    "tr",
    "zh",
  ];
  const locale = Session.getActiveUserLocale().replace("_", "-").toLowerCase();
  if (targetLangs.indexOf(locale) !== -1) return locale;
  const localePrefix = locale.substring(0, 2);
  if (targetLangs.indexOf(localePrefix) !== -1) return localePrefix;
  if (localePrefix === "en") return "en-US";
  if (localePrefix === "pt") return "en-PT";
  return "en";
};

export { selectTargetLang };
