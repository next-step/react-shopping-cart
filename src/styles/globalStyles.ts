import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *, :after, :before, ::before, ::after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }
  
  img, picture, video, svg, canvas {
    display: block;
    max-width: 100%;
  }
  
  button,
  [role='button'] {
    border: 0;
    border-radius: 0;
    background: none;
    user-select: none;
  }
  
  ul, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  input, img, fieldset, iframe {
    border: 0;
  }
  
  address, em, i {
    font-style: normal;
  }
  
  :focus {
    outline: none;
  }
`;

export default globalStyle;
