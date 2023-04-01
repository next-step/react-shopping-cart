export const COUNT_TYPE = {
  UP: 'UP' as const,
  DOWN: 'DOWN' as const,
};

export type DeleteType = 'DIRECT' | 'SELECT';
export const DELETE_TYPE = {
  DIRECT: 'DIRECT' as const,
  SELECT: 'SELECT' as const,
};
