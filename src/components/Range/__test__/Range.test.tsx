import { screen, render, fireEvent } from '@testing-library/react';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { RangeSelector } from '../constants';
import { Range } from '../Range'; // Путь к вашему компоненту

describe('Range component: ', () => {
  it('should renders with default props', () => {
    render(
      <ThemeProvider themeName="standard">
        <Range onChange={jest.fn()} />
      </ThemeProvider>,
    );
    const rangeInput = screen.getByTestId(RangeSelector.RANGE);

    expect(rangeInput).toBeInTheDocument();
    expect(rangeInput).toHaveAttribute('min', '0');
    expect(rangeInput).toHaveAttribute('max', '100');
    expect(rangeInput).toHaveAttribute('step', '1');
    expect(rangeInput).toHaveValue('0');
  });

  it('should renders with custom props', () => {
    render(
      <ThemeProvider themeName="standard">
        <Range onChange={jest.fn()} min={10} max={50} step={5} value={20} />
      </ThemeProvider>,
    );
    const rangeInput = screen.getByTestId(RangeSelector.RANGE);

    expect(rangeInput).toHaveAttribute('min', '10');
    expect(rangeInput).toHaveAttribute('max', '50');
    expect(rangeInput).toHaveAttribute('step', '5');
    expect(rangeInput).toHaveValue('20');
  });

  it('should calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider themeName="standard">
        <Range onChange={handleChange} />
      </ThemeProvider>,
    );
    const rangeInput = screen.getByTestId(RangeSelector.RANGE);

    fireEvent.change(rangeInput, { target: { value: '50' } });

    expect(handleChange).toHaveBeenCalledWith(50);
    expect(rangeInput).toHaveValue('50');
  });

  it('should updates internal state when userValue prop changes', () => {
    const { rerender } = render(
      <ThemeProvider themeName="standard">
        <Range onChange={jest.fn()} value={10} />
      </ThemeProvider>,
    );
    const rangeInput = screen.getByTestId(RangeSelector.RANGE);

    expect(rangeInput).toHaveValue('10');

    rerender(
      <ThemeProvider themeName="standard">
        <Range onChange={jest.fn()} value={30} />
      </ThemeProvider>,
    );

    expect(rangeInput).toHaveValue('30');
  });
});
