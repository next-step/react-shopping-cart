const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  xl: '1280px',
};

export const getResponsiveLanes = () => {
  if (window.matchMedia(`(min-width: ${BREAKPOINTS.xl})`).matches) return 4;
  if (window.matchMedia(`(min-width: ${BREAKPOINTS.md})`).matches) return 3;
  if (window.matchMedia(`(min-width: ${BREAKPOINTS.sm})`).matches) return 2;
  return 1;
};
