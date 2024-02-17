import type { Meta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Divider from './Divider';

export default {
  title: 'Common/Divider',
  component: Divider,
} as Meta;

export const Primary: ComponentStory<typeof Divider> = (args) => (
  <>
    위
    <Divider {...args} />
    아래
  </>
);
Primary.args = {
  size: 10,
  height: 1,
  color: 'gray04',
};

export const Size: ComponentStory<typeof Divider> = () => (
  <>
    <Wrapper>
      위
      <Divider size={3} color="gray04" height={1} />
      아래
    </Wrapper>

    <Wrapper>
      위
      <Divider size={10} color="gray04" height={1} />
      아래
    </Wrapper>

    <Wrapper>
      위
      <Divider size={20} color="gray04" height={1} />
      아래
    </Wrapper>
  </>
);

export const Height: ComponentStory<typeof Divider> = () => (
  <>
    <Wrapper>
      위
      <Divider size={7} color="gray04" height={1} />
      아래
    </Wrapper>

    <Wrapper>
      위
      <Divider size={7} color="gray04" height={4} />
      아래
    </Wrapper>

    <Wrapper>
      위
      <Divider size={7} color="gray04" height={10} />
      아래
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  margin-bottom: 35px;
`;
