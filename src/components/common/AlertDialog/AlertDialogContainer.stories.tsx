import { Meta, StoryObj } from '@storybook/react';
import AlertDialogContainer from './AlertDialogContainer';
import useAlertDialogStore from '@/store/alertDialogStore';
import Button from '../Button/Button';

const meta: Meta<typeof AlertDialogContainer> = {
  title: 'Primitives/AlertDialogContainer',
  component: AlertDialogContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AlertDialogContainer>;

export const Primary: Story = {
  render: () => {
    const openAlertDialog = useAlertDialogStore.use.onOpen();

    const handleClick = () => {
      openAlertDialog({
        title: '알림',
        message: '이것은 알림 메시지입니다.',
        btnText: '확인',
        onConfirm: () => {
          alert('확인 버튼을 눌렀습니다.');
        },
      });
    };

    return (
      <div id='alert-dialog'>
        <Button onClick={handleClick}>Show AlertDialog</Button>
        <AlertDialogContainer />
      </div>
    );
  },
};
