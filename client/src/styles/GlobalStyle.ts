import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

body {
  width: 1920px;
  margin: 0;
}


*,
*::before,
*::after {
  box-sizing: border-box;
} */
img {
  max-width: 100%;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
