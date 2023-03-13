const breakpoints = [380, 780, 1280];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px`);

export default mq;
