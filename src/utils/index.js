import { BREAKPOINTS } from '../const';

export const getBreakpoint = (point) => `@media (min-width: ${BREAKPOINTS[point]}px)`;