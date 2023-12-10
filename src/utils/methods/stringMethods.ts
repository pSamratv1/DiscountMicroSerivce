/* eslint-disable @typescript-eslint/no-explicit-any */
export const toSnakeCase = (sentence: string) => {
  // Replace spaces and non-alphanumeric characters with underscores
  let snakeCase = sentence.replace(/[^a-zA-Z0-9]/g, "_");

  // Convert to lowercase
  snakeCase = snakeCase.toLowerCase();

  // Remove any leading or trailing underscores
  snakeCase = snakeCase.replace(/^_+|_+$/g, "");

  return snakeCase;
};

export const toTitleCase = (str: string) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
};

export const transformOptionsInObj = (data: any, activeProductList: string) => {
  let transformedData: any = [];

  for (const category in data) {
    if (
      category === activeProductList &&
      Object.prototype.hasOwnProperty.call(data, category)
    ) {
      const categoryData = data[category];
      transformedData = categoryData.map((item: any) => ({
        label: item,
        value: toSnakeCase(item),
      }));
    }
  }

  return transformedData;
};
