import { globalCss } from '../stitches.config.js';

export const applyReset = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    minHeight: '100vh',
    maxWidth: '100vw',
    colorScheme: 'light dark',
  },
});
