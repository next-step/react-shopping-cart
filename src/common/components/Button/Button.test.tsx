import * as stories from './Button.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

const { Primary, Brown, Disabled } = composeStories(stories);

test('Button render test', async () => {
  render(<Primary />);
  const PrimaryButton = await screen.findByRole('button');
  expect(PrimaryButton).toBeInTheDocument();
});
test('Button text test', async () => {
  render(<Primary />);
  const PrimaryButton = await screen.findByText('버튼');
  expect(PrimaryButton).toBeInTheDocument();
});

test('Primary Button attribute test', async () => {
  render(<Primary />);
  const PrimaryButton = await screen.findByText('버튼');
  expect(PrimaryButton).toHaveStyle({
    background: '#2ac1bc',
    color: 'white',
  });
});

test('Brown Button attribute test', async () => {
  render(<Brown />);
  const BrownButton = await screen.findByRole('button');
  expect(BrownButton).toHaveStyle({ background: '#73675c', color: 'white' });
});

test('Disabled Button attribute test', async () => {
  render(<Disabled />);
  const DiabledButton = await screen.findByRole('button');
  expect(DiabledButton).toHaveStyle({ opacity: '0.5', pointerEvents: 'none' });
});
