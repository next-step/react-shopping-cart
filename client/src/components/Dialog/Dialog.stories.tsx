import { css } from '@emotion/css';
import { Story } from '@storybook/react';

import { Button, Dialog } from 'components';
import { DialogProps } from 'components/Dialog';

import { useIsOpen } from 'hooks';

export default {
  title: 'Common/Dialog',
  compoent: Dialog,
  argTypes: {
    width: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: { type: 'select' },
    },
    height: {
      options: ['small', 'large', 'auto'],
      control: { type: 'select' },
    },
  },
};

export const Template: Story<DialogProps> = (args) => {
  const { isOpen, open, close } = useIsOpen();

  return (
    <div>
      <Button onClick={open}>열기</Button>
      {isOpen && (
        <Dialog {...args} onClose={close}>
          <div
            className={css`
              padding: 20px;
            `}
          >
            <div
              className={css`
                margin: 0 0 20px;
              `}
            >
              예시입니다.
            </div>
            <div
              className={css`
                display: flex;
                gap: 10px;
              `}
            >
              <Button
                size="large"
                onClick={close}
                className={css`
                  width: 100%;
                `}
              >
                취소
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={close}
                className={css`
                  width: 100%;
                `}
              >
                확인
              </Button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
Template.args = {
  width: 'medium',
  height: 'auto',
};
Template.storyName = 'Playground';
