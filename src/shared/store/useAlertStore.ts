import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import createSelectors from 'src/shared/lib/zustand';

export interface AlertOptions {
	message: string;
	title: string;
	confirm: () => void;
}

interface AlertState extends AlertOptions {
	visible: boolean;
	open: (options: AlertOptions) => void;
	close: () => void;
}

const useAlertBaseStore = create<AlertState>()(
	immer(set => ({
		visible: false,
		message: '',
		title: '',
		confirm: () => {},
		open: options => set({ visible: true, ...options }),
		close: () => set({ visible: false, message: '', confirm: () => {} }),
	})),
);

const useAlertStore = createSelectors(useAlertBaseStore);

export default useAlertStore;
