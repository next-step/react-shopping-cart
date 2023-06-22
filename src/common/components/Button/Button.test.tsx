import * as stories from './Button.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

const { Primary, Brown, Disabled } = composeStories(stories) ;

describe('Primary Button 스토리북 테스트', () => {
  test('Primary Button이 스토리북에 존재한다.', async () => {
    render(<Primary />);
    const PrimaryButton = await screen.findByRole('button');
    expect(PrimaryButton).toBeInTheDocument();
  });
  test('Primary Button Text는 버튼 이다.', async () => {
    render(<Primary />);
    const PrimaryButton = await screen.findByRole('button');
    expect(PrimaryButton).toHaveTextContent('버튼');
  });

  test('Primary Button color는 white, background는 #2ac1bc이다', async () => {
    render(<Primary />);
    const PrimaryButton = await screen.findByRole('button');
    expect(PrimaryButton).toHaveStyle({
      background: '#2ac1bc',
      color: 'white',
    });
  });

  test('Disabled Button attribute가 존재한다.', async () => {
    render(<Disabled />);
    const DiabledButton = await screen.findByRole('button');
    expect(DiabledButton).toHaveStyle({ opacity: '0.5', pointerEvents: 'none' });
  });
});

describe('Brown Button 스토리북 테스트', () => {
  test('Brown Button이 스토리북에 존재한다.', async () => {
    render(<Brown />);
    const BrownButton = await screen.findByRole('button');
    expect(BrownButton).toBeInTheDocument();
  });

  test('Brown Button Text는 버튼 이다.', async () => {
    render(<Brown />);
    const BrownButton = await screen.findByRole('button');
    expect(BrownButton).toHaveTextContent('버튼');
  });

  test('Brown Button color는 white , background는 #73675c이다.', async () => {
    render(<Brown />);
    const BrownButton = await screen.findByRole('button');
    expect(BrownButton).toHaveStyle({ background: '#73675c', color: 'white' });
  });
});

describe('Disabled Button 스토리북 테스트', () => {
  test('Disabled 스토리북에 존재한다.', async () => {
    render(<Disabled />);
    const DisabledButton = await screen.findByRole('button');
    expect(DisabledButton).toBeInTheDocument();
  });

  test('Disabled Button Text는 버튼 이다.', async () => {
    render(<Disabled />);
    const DisabledButton = await screen.findByRole('button');
    expect(DisabledButton).toHaveTextContent('버튼');
  });

  test('Disabled Button opacity는 0.5 , pointerEvents는 none이다.', async () => {
    render(<Disabled />);
    const DisabledButton = await screen.findByRole('button');
    expect(DisabledButton).toHaveStyle({ opacity: '0.5', pointerEvents: 'none' });
  });
});
