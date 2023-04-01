import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'common/ErrorMessage',
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '데이터를 가져오는데 실패하였습니다.',
};
