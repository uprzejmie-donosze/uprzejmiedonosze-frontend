const required = (type: string, message?: string) => (value: any) =>
  !!value || typeof value === typeof type
    ? undefined
    : message || "Pole wymagane";

export const stringRequired = required("string");
