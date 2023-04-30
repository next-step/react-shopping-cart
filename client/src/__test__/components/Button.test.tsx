import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from 'components';

describe('Button 컴포넌트', () => {
  test('Button 컴포넌트 렌더링', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button');

    expect(button.textContent).toBe('Default');
  });

  test('onClick prop 검증', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Default</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('disabled prop 검증', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Disabled
      </Button>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('loading prop 검증', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} loading>
        Loading
      </Button>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('size prop 중 large snapshot', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('size prop 중 medium snapshot', () => {
    render(<Button size="medium">Medium</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('size prop 중 small snapshot', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('size prop 중 tiny snapshot', () => {
    render(<Button size="tiny">Tiny</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('type prop 중 default snapshot', () => {
    render(<Button type="default">Default Type</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('type prop 중 primary snapshot', () => {
    render(<Button type="primary">Primary Type</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('type prop 중 secondary snapshot', () => {
    render(<Button type="secondary">Secondary Type</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });

  test('type prop 중 text snapshot', () => {
    render(<Button type="text">Text Type</Button>);
    const button = screen.getByRole('button');
    expect(button).toMatchSnapshot();
  });
});
