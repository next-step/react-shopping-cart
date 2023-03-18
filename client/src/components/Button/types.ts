export type ButtonType = 'primary' | 'secondary' | 'text' | 'default';
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny';

export interface ButtonSpace {
  left: number;
  right: number;
}

export interface ButtonAffixSpace {
  affix: number;
  normal: number;
}

export interface ButtonSizeStyles {
  height: number;
  fontSize: number;
  padding: ButtonSpace;
}

export interface ButtonAffixStatus {
  hasLeftComponent: boolean;
  hasRightComponent: boolean;
}
