import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'common/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  title: '모달창',
};
