import { DefaultTheme } from 'styled-components';

// 반응형 사이즈
const size = {
  mobile: 420,
  tablet: 768,
};
const media = {
  tablet: `(min-width: ${size.mobile}px)`,
  desktop: `(min-width: ${size.tablet}px)`,
};

// 주로 사용되는 컬러
const colors = {
  background: '#ABC9CD',
  white: '#f8f8f8',
  pink: '#E4C1CB',
  skin: '#F4DBCF',
  violet: '#B5B3C1',
  skyBlue: '#CADEE2',
  purple: '#C9BCC8',
  warning: '#da7575',
};

const common = {
  pageContainer: `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
  ellipsis: `
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  `,
};

const theme: DefaultTheme = {
  media,
  colors,
  common,
};

export default theme;
