import { CSSProperties } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'text' | 'default';
export type ButtonTheme = 'fill' | 'disabled';
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny';

export type ButtonColor = {
  [key in ButtonType]: {
    [key in ButtonTheme]: {
      background: CSSProperties['backgroundColor'];
      border: CSSProperties['borderColor'];
      text: CSSProperties['color'];
    };
  };
};

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
