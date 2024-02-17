import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from 'components';

describe('Checkbox 컴포넌트', () => {
  test('Checkbox 컴포넌트 렌더링', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDefined();
  });

  test('Checkbox 컴포넌트의 초기 상태는 체크되지 않은 상태여야 한다.', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });

  test('checked prop을 전달할 경우 체크된 상태여야 한다.', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  test('체크박스를 클릭할 경우 체크박스의 체크 상태가 변경되어야 한다.', () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toBeCalled();
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toBeCalled();
    expect(checkbox).not.toBeChecked();
  });

  /**
   * @see https://github.com/testing-library/dom-testing-library/issues/92
   * fireEvent의 click으로 input checkbox의 disabled를 테스팅할 수 없음
   */
  test('disabled 상태의 체크박스는 체크 상태를 변경할 수 없어야 한다.', () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} disabled />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('disabled');
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).toHaveAttribute('disabled');
    expect(checkbox).not.toBeChecked();
  });

  test('size prop 중 large snapshot', () => {
    render(<Checkbox size="large">Large</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toMatchSnapshot();
  });

  test('size prop 중 medium snapshot', () => {
    render(<Checkbox size="medium">Medium</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toMatchSnapshot();
  });

  test('size prop 중 small snapshot', () => {
    render(<Checkbox size="small">Small</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toMatchSnapshot();
  });
});
