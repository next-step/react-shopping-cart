import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };

    colors: {
      background: string;
      white: string;
      pink: string;
      skin: string;
      violet: string;
      skyBlue: string;
      purple: string;
      warning: string;
    };

    common: {
      pageContainer: string;
      ellipsis: string;
    };
  }
}
