import { useState } from 'react';
import { Story } from '@storybook/react';

import { Counter } from 'components';
import { CounterProps } from 'components/Counter';

export default {
  title: 'Common/Counter',
  component: Counter,
};

export const Template: Story<CounterProps> = (args) => {
  const [count, setState] = useState(1);

  const handleClickMinus = () => {
    setState((prevState) => prevState - 1);
  };

  const handleClickPlus = () => {
    setState((prevState) => prevState + 1);
  };

  return <Counter {...args} count={count} onMinus={handleClickMinus} onPlus={handleClickPlus} />;
};
Template.args = { min: 1, max: 10 };
Template.storyName = 'Playground';
