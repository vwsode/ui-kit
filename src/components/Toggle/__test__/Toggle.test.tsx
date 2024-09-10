import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { KEY } from '../../../constants/KeyCodes';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { ToggleSelector } from '../constants';
import { Toggle } from '../Toggle';

describe('Toggle Component', () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should renders correctly with default props', () => {
    render(
      <ThemeProvider themeName="standard">
        <Toggle size="regular" isChecked={false} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const toggleElement = screen.getByTestId(ToggleSelector.TOGGLE);
    expect(toggleElement).toBeInTheDocument();
    expect(toggleElement).toHaveAttribute('aria-checked', 'false');
    expect(toggleElement).toHaveAttribute('role', 'switch');
  });

  it('should changes state on click', () => {
    render(
      <ThemeProvider themeName="standard">
        <Toggle isChecked={false} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const toggleElement = screen.getByTestId(ToggleSelector.TOGGLE);
    fireEvent.click(toggleElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(toggleElement).toHaveAttribute('aria-checked', 'true');
  });

  it('should does not change state when disabled', () => {
    render(
      <ThemeProvider themeName="standard">
        <Toggle isChecked={false} isDisabled={true} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const toggleElement = screen.getByTestId(ToggleSelector.TOGGLE);
    fireEvent.click(toggleElement);

    expect(mockOnChange).not.toHaveBeenCalled();
    expect(toggleElement).toHaveAttribute('aria-checked', 'false');
  });

  it('should calls onChange with the correct value', () => {
    render(
      <ThemeProvider themeName="standard">
        <Toggle isChecked={false} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const toggleElement = screen.getByTestId(ToggleSelector.TOGGLE);
    fireEvent.click(toggleElement);

    expect(mockOnChange).toHaveBeenCalledWith({ target: { checked: true } });
  });

  it('should handles keydown event for SPACE key', () => {
    render(
      <ThemeProvider themeName="standard">
        <Toggle isChecked={false} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const toggleElement = screen.getByTestId(ToggleSelector.TOGGLE);
    fireEvent.keyDown(toggleElement, { key: KEY.SPACE });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(toggleElement).toHaveAttribute('aria-checked', 'true');
  });

  it('should updates state when isChecked prop changes', () => {
    const { rerender } = render(
      <ThemeProvider themeName="standard">
        <Toggle isChecked={false} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const toggleElement = screen.getByTestId(ToggleSelector.TOGGLE);
    expect(toggleElement).toHaveAttribute('aria-checked', 'false');

    rerender(
      <ThemeProvider themeName="standard">
        <Toggle isChecked={true} onChange={mockOnChange} />
      </ThemeProvider>,
    );
    expect(toggleElement).toHaveAttribute('aria-checked', 'true');
  });

  it('should sets proper size for ToggleIcon', () => {
    render(
      <ThemeProvider themeName="standard">
        <Toggle size="large" isChecked={false} onChange={mockOnChange} />
      </ThemeProvider>,
    );

    const iconCheck = screen.getByTestId(ToggleSelector.ICON_CHECK);
    const iconUncheck = screen.getByTestId(ToggleSelector.ICON_UNCHECK);

    expect(iconCheck).toHaveAttribute('size', '20');
    expect(iconUncheck).toHaveAttribute('size', '20');
  });
});
