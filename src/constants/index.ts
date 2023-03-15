import { Mode } from '@/types';

export const BASE_URL: Record<Mode, string> = {
  test: 'http://localhost:3000',
  mock: 'http://localhost:3000',
  development: 'http://localhost:3000',
  production: '',
};

export const getEnvMode = () => import.meta.env.MODE as Mode;

export const getBaseUrlByMode = BASE_URL[getEnvMode()];
