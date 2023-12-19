export const breakpoints: { [key: string]: string } = {
  sm: "420",
  md: "700",
  lg: "1200",
  xl: "1440",
};

const mediaMin = (size: string) => `@media screen and (min-width: ${size}px)`;
export const mediaMax = (size: string) =>
  `@media screen and (max-width: ${size}px)`;

export default mediaMin;
