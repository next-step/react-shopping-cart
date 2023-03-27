import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'common',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const DialogUI = Template.bind({});
DialogUI.args = {
  title: '모달창',
  isOpen: true,
};
