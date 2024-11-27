export const toSnakeCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_") // Replace non-alphanumeric with _
    .replace(/_+$/, ""); // Remove trailing underscores
};
