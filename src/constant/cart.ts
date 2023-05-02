export type CountType = 'UP' | 'DOWN';
export const COUNT_TYPE = {
  UP: 'UP' as const,
  DOWN: 'DOWN' as const,
};

export type DeleteType = 'DIRECT' | 'SELECT';
export const DELETE_TYPE = {
  DIRECT: 'DIRECT' as const,
  SELECT: 'SELECT' as const,
};

export type SelectType = 'ALL' | 'SINGLE';
export const SELECT_TYPE = {
  ALL: 'ALL' as const,
  SINGLE: 'SINGLE' as const,
};
