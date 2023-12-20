const required = (type: string, message?: string) => (value: any) =>
  !!value || typeof value === typeof type ? undefined : message || "Required";

const validateByPattern = (pattern: RegExp) => (value: any) => {
  if (value !== undefined) {
    return value.match(pattern) ? undefined : "Must follow pattern key=value";
  }
  return undefined;
};

export const stringRequired = required("string");
export const camparisonPattern = validateByPattern(
  /^[a-zA-Z0-9]+=[a-zA-Z0-9%-_]+$/,
);
