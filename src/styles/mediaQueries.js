export const breakpoints = {
  sm: '420',
  md: '700',
  lg: '1200',
  xl: '1440',
}

const mediaMin = size => `@media screen and (min-width: ${size}px)`;
export const mediaMax = size => `@media screen and (max-width: ${size}px)`;

export default mediaMin;
