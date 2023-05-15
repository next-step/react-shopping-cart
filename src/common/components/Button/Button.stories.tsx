import { ComponentStory, ComponentMeta, composeStories } from '@storybook/react';
import Button from './Button';
export default {
  title: 'common/Button',
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
  <Button theme="primary" style={{ padding: '15px', fontSize: '30px', width: '10%' }} disabled={true}>
    버튼
  </Button>
);

export const Primary = Template.bind({});
export const Brown = Template2.bind({});
export const Disabled = Template3.bind({});
