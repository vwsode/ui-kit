import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { RadioSelector } from '../constants';
import { Radio } from '../Radio';

import { MOCK_LABEL, MOCK_NAME } from './mock';

describe('Radio component: ', () => {
  const defaultProps = {
    label: MOCK_LABEL,
    name: MOCK_NAME,
    onChange: () => {},
    value: '1',
  };

  it('should render the radio button with the correct label', () => {
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId(RadioSelector.TEXT)).toBeInTheDocument();
  });

  it('should set the radio button as checked when isChecked is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} isChecked />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.RADIO);
    expect(radioInput).toBeChecked();
  });

  it('should set the radio button as disabled when isDisabled is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} isDisabled />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.RADIO);
    expect(radioInput).toBeDisabled();
  });

  it('should trigger onChange event when clicked', () => {
    const onChangeMock = jest.fn();
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} onChange={onChangeMock} />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.RADIO);
    fireEvent.click(radioInput);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should set the radio button as required when isRequired is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} isRequired />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.RADIO);
    expect(radioInput).toBeRequired();
  });

  it('should set the aria-label correctly', () => {
    const ariaLabel = 'Custom Aria Label';
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} ariaLabel={ariaLabel} />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.LABEL);
    expect(radioInput).toHaveAttribute('aria-label', ariaLabel);
  });

  it('should apply custom props to the input', () => {
    const customProps = {
      'data-test-custom': 'customValue',
    };
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} {...customProps} />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.RADIO);
    expect(radioInput).toHaveAttribute('data-test-custom', 'customValue');
  });

  it('should render a custom label component when label is not a string', () => {
    const customLabel = <span>Custom Label</span>;

    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} label={customLabel} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId(RadioSelector.LABEL)).toBeInTheDocument();
  });

  it('should be invalid when isInvalid is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Radio {...defaultProps} isInvalid />
      </ThemeProvider>,
    );
    const radioInput = screen.getByTestId(RadioSelector.RADIO);
    expect(radioInput).toHaveAttribute('aria-invalid', 'true');
  });
});
