import type { Meta, StoryObj } from '@storybook/react';

import GNBComponent from 'src/shared/ui/GNB';
import { MemoryRouterDecorator } from 'src/stories/Decorator';

const meta: Meta = {
	component: GNBComponent,
	decorators: [MemoryRouterDecorator],
};

export default meta;

type Story = StoryObj<typeof GNBComponent>;

export const GNB: Story = {
	args: {},
	argTypes: {},
};
