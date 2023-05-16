import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';
import Button from '../Button/Button';
import { useState } from 'react';

export default {
  title: 'common/Dialog',
  component: Dialog,
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = () => <Dialog isOpen={true} title="모달창" />;

export const Default = Template.bind({});
