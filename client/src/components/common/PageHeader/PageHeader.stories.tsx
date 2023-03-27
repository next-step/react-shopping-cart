import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader } from '..';
export default {
  title: 'common',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const DefaultPageHeader = Template.bind({});
DefaultPageHeader.args = {
  children: 'Page Header',
};
