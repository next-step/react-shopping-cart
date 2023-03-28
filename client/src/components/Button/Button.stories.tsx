import { css } from '@emotion/css';
import { Story } from '@storybook/react';

import { Button } from 'components';
import { ButtonProps } from 'components/Button';

import { CartSVG } from 'assets/svgs';

export default {
  title: 'Common/Button',
  component: Button,
};

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;
Template.args = {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  children: 'Button',
  justify: 'center',
};
Template.storyName = 'Playground';

export const Sizes = () => {
  return (
    <div
      className={css`
        display: flex;
        gap: 10px;
      `}
    >
      <Button type="primary" size="large">
        large
      </Button>
      <Button type="primary" size="medium">
        medium
      </Button>
      <Button type="primary" size="small">
        small
      </Button>
      <Button type="primary" size="tiny">
        tiny
      </Button>
    </div>
  );
};

export const Loading = () => {
  return (
    <div
      className={css`
        display: flex;
        gap: 10px;
      `}
    >
      <Button type="primary" size="large" loading>
        primary
      </Button>
      <Button type="default" size="large" loading>
        default
      </Button>
      <Button type="secondary" size="large" loading>
        secondary
      </Button>
      <Button type="text" size="large" loading>
        text
      </Button>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div
      className={css`
        display: flex;
        gap: 10px;
      `}
    >
      <Button type="primary" size="large" disabled>
        primary
      </Button>
      <Button type="default" size="large" disabled>
        default
      </Button>
      <Button type="secondary" size="large" disabled>
        secondary
      </Button>
      <Button type="text" size="large" disabled>
        text
      </Button>
    </div>
  );
};

export const WithIcon = () => {
  return <Button leftComponent={<CartSVG width={16} />}>With Icon</Button>;
};

export const OnlyIcon = () => {
  return (
    <Button>
      <CartSVG width={16} />
    </Button>
  );
};
