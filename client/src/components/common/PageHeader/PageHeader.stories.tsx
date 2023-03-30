import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader } from '..';
export default {
  title: 'common/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Page Header',
};
