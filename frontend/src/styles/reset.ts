import { css } from '@emotion/react';

const reset = css`
  /* stylelint-disable */
  // http://meyerweb.com/eric/tools/css/reset/
  // v2.0 | 20110126
  // License: none (public domain)

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    margin: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    letter-spacing: -0.05em;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox

    &::before,
    &::after {
      box-sizing: border-box;
    }

    &::-webkit-scrollbar {
      display: none; // Chrome
    }
  }

  img {
    border: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }

  select,
  input,
  textarea {
    // @miriya (2022-03-03): 사파리에서 줌 시작되지 않는 최소 사이즈
    // https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
    font-size: 16px;
  }

  input,
  button {
    -webkit-appearance: none;
  }

  input {
    background-color: transparent;
    background-image: none !important;
    border: 0;
  }

  button {
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }

  input:is([type='button'], [type='submit'], [type='reset']),
  input[type='file']::file-selector-button,
  button {
    color: initial;
  }
`;

export default reset;
