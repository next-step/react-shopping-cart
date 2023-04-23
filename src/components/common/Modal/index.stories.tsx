import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '@/components/common';
import useBooleanState from '@/hooks/useBooleanState';

import Modal from '.';

export default {
  title: 'Components/common/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default = () => {
  const [open, onOpen, onClose] = useBooleanState();
  return (
    <>
      <Button size="small" onClick={onOpen}>
        모달 열기
      </Button>
      {open && (
        <Modal onClose={onClose}>
          <Button theme="outline" onClick={onClose}>
            닫기
          </Button>
        </Modal>
      )}
    </>
  );
};
