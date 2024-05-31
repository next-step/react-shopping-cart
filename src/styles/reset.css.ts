import { globalStyle } from '@vanilla-extract/css';

import * as layers from './layers.css';

/*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
*/
globalStyle(
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  {
    '@layer': {
      [layers.reset]: {
        all: 'unset',
        display: 'revert',
      },
    },
  }
);

/* Preferred box-sizing value */
globalStyle('*, *::before, *::after', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
    },
  },
});

/* Remove list styles (bullets/numbers) */
globalStyle('ol, ul, menu, summary', {
  '@layer': {
    [layers.reset]: {
      listStyle: 'none',
    },
  },
});

/* For images to not be able to exceed their container */
globalStyle('img', {
  '@layer': {
    [layers.reset]: {
      maxWidth: '100%',
    },
  },
});

/* removes spacing between cells in tables */
globalStyle('table', {
  '@layer': {
    [layers.reset]: {
      borderCollapse: 'collapse',
    },
  },
});

/* revert the 'white-space' property for textarea elements on Safari */
globalStyle('textarea', {
  '@layer': {
    [layers.reset]: {
      whiteSpace: 'revert',
    },
  },
});

/* fix the feature of 'hidden' attribute.
 display:revert; revert to element instead of attribute */
globalStyle(':where([hidden])', {
  '@layer': {
    [layers.reset]: {
      display: 'none',
    },
  },
});

/* revert for bug in Chromium browsers
 - fix for the content editable attribute will work properly. */
globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  // @ts-expect-error: -webkit-line-break is a non-standard property
  '@layer': {
    [layers.reset]: {
      MozUserModify: 'read-write',
      WebkitUserModify: 'read-write',
      overflowWrap: 'break-word',
      WebkitLineBreak: 'after-white-space',
      WebkitUserSelect: 'auto',
    },
  },
});

/* apply back the draggable feature - exist only in Chromium and Safari */
globalStyle(':where([draggable="true"])', {
  '@layer': {
    [layers.reset]: {
      // @ts-expect-error: -webkit-user-drag is a non-standard property
      WebkitUserDrag: 'element',
    },
  },
});
