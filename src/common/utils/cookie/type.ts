export interface CookieOptions {
  /**
   * @summary 쿠키의
   * @default 세션 쿠기(브라우저 종료시 자동 삭제)
   * @description 지정시 영구 쿠기(지정 날짜까지 유지)
   */
  expires?: Date
  /**
   * @default "/"
   */
  path?: string
  /**
   * @default 현재 도메인
   * @description 미지정시 하위 도메인 접근 불가
   */
  domain?: string
  /**
   * 기타 키 정의
   */
  [key: string]: unknown
}
