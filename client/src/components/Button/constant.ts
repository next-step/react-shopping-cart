import { colors } from 'constants/colors';
import { ButtonColor } from './types';

export const buttonColors: ButtonColor = {
  primary: {
    fill: {
      background: colors.green600,
      border: colors.green600,
      text: colors.white,
    },
    disabled: {
      background: colors.gray100,
      border: colors.gray100,
      text: colors.gray500,
    },
  },
  secondary: {
    fill: {
      background: colors.yellow900,
      border: colors.yellow900,
      text: colors.white,
    },
    disabled: {
      background: colors.gray100,
      border: colors.gray100,
      text: colors.gray500,
    },
  },
  text: {
    fill: {
      background: 'transparent',
      border: 'transparent',
      text: colors.black,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      text: colors.gray500,
    },
  },
  default: {
    fill: {
      background: colors.white,
      border: colors.gray400,
      text: colors.black,
    },
    disabled: {
      background: colors.gray100,
      border: colors.gray300,
      text: colors.gray500,
    },
  },
};
