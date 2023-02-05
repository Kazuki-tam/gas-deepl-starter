/**
 * Sleep after failed requests.
 * @param {string} propertyName The Properties service
 * @return The property value
 */

const getPropertiesService = (propertyName: string) => {
  const propertyValue: string | null = PropertiesService.getScriptProperties()
    .getProperty(propertyName);
  if (!propertyValue) {
    throw new Error(`Error: ${propertyName} is not defined.`);
  }
  return propertyValue;
};

export { getPropertiesService };
