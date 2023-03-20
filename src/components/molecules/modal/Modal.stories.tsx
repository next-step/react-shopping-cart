import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './index';

const defaultArgs = {
  open: true,
  text: '상품이 장바구니에 담겼습니다.\n 장바구니로 이동하시겠습니까?'
};

export default {
  title: 'Common/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Default = Template.bind({});
Default.args = defaultArgs;
