import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '..';
export default {
  title: 'common',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button theme="primary" style={{ padding: '15px', fontSize: '30px', width: '10%' }}>
    버튼
  </Button>
);

const Template2: ComponentStory<typeof Button> = () => (
  <Button theme="brown" style={{ padding: '15px', fontSize: '30px', width: '10%' }}>
    버튼
  </Button>
);
const Template3: ComponentStory<typeof Button> = () => (
  <Button theme="primary" style={{ padding: '15px', fontSize: '30px', width: '10%' }} active={false}>
    버튼
  </Button>
);

export const PrimaryButton = Template.bind({});
export const BrownButton = Template2.bind({});
export const DisabledButton = Template3.bind({});
