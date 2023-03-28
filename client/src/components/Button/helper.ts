import {
  ButtonAffixSpace,
  ButtonAffixStatus,
  ButtonSize,
  ButtonSizeStyles,
  ButtonSpace,
} from './types';

const buttonSizes = {
  large: {
    height: 44,
    fontSize: 16,
    padding: {
      right: 16,
      left: 16,
    },
    affixSpace: {
      affix: 10,
      normal: 12,
    },
  },
  medium: {
    height: 40,
    fontSize: 13,
    padding: {
      right: 12,
      left: 12,
    },
    affixSpace: {
      affix: 10,
      normal: 12,
    },
  },
  small: {
    height: 32,
    fontSize: 13,
    padding: {
      right: 10,
      left: 10,
    },
    affixSpace: {
      affix: 10,
      normal: 12,
    },
  },
  tiny: {
    height: 28,
    fontSize: 13,
    padding: {
      right: 8,
      left: 8,
    },
    affixSpace: {
      affix: 6,
      normal: 8,
    },
  },
};

const getButtonPadding = (
  padding: ButtonSpace,
  { affix, normal }: ButtonAffixSpace,
  { hasLeftComponent, hasRightComponent }: ButtonAffixStatus
) => {
  const hasAffix = hasLeftComponent || hasRightComponent;
  if (hasAffix === false) {
    return padding;
  }

  return {
    left: hasLeftComponent ? affix : normal,
    right: hasRightComponent ? affix : normal,
  };
};

export const getButtonSizeStyles = ({
  size,
  hasLeftComponent,
  hasRightComponent,
}: { size: ButtonSize } & ButtonAffixStatus): ButtonSizeStyles => {
  const { height, fontSize, padding, affixSpace } = buttonSizes[size];

  return {
    height,
    fontSize,
    padding: getButtonPadding(padding, affixSpace, { hasLeftComponent, hasRightComponent }),
  };
};
