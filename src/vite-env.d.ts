/// <reference types="vite/client" />

import { Mode } from './types';

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly MODE: Mode;
  readonly PUBLIC_URL: string;
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
