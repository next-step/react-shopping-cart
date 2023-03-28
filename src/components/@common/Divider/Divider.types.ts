import { theme } from 'styles/theme';

export interface DividerProps {
  color?: keyof typeof theme.color;
  size?: number;
  height?: number;
}
