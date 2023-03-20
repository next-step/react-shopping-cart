import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // 타입스크립트에서 사용할 테마 변수를 선언합니다.
    primaryColor: string;
    secondaryColor: string;
  }
}
