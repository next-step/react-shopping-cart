import type { Meta, StoryObj } from '@storybook/react';

import AlertComponent from 'src/shared/ui/Alert';
import useAlertStore, { AlertOptions } from 'src/shared/store/useAlertStore';

const meta: Meta<Omit<AlertOptions, 'confirm'>> = {
	component: AlertComponent,
	render: ({ message, title }) => {
		const open = useAlertStore.use.open();

		const handleClick = () => {
			open({ message, title, confirm: () => {} });
		};

		return (
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
				<button onClick={handleClick} className="primary-button" style={{ width: 'fit-content' }}>
					Alert
				</button>
				<AlertComponent />
			</div>
		);
	},
};

export default meta;

type Story = StoryObj<Omit<AlertOptions, 'confirm'>>;

export const Alert: Story = {
	args: {
		message: 'Alert Message',
		title: 'Alert Title',
	},
	argTypes: {
		message: { control: 'text' },
		title: { control: 'text' },
	},
};
