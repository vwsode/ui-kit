import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { Font } from '@/themes';

import { TextFieldSelector } from '../constants';
import { TextField } from '../TextField';

describe('TextField component: ', () => {
  it('renders the TextField component', () => {
    render(
      <ThemeProvider themeName="standard">
        <TextField />
      </ThemeProvider>,
    );

    const field = screen.getByTestId(TextFieldSelector.FIELD);
    expect(field).toBeInTheDocument();
  });

  it('renders elemBefore and elemAfter', () => {
    render(
      <ThemeProvider themeName="standard">
        <TextField
          elemBefore={<span data-testid="before">Before</span>}
          elemAfter={<span data-testid="after">After</span>}
        />
        ,
      </ThemeProvider>,
    );

    const elemBefore = screen.getByTestId('before');
    const elemAfter = screen.getByTestId('after');

    expect(elemBefore).toBeInTheDocument();
    expect(elemAfter).toBeInTheDocument();
  });

  it('renders with fullWidth prop', () => {
    render(
      <ThemeProvider themeName="standard">
        <TextField fullWidth />
      </ThemeProvider>,
    );

    const field = screen.getByTestId(TextFieldSelector.FIELD);
    expect(field).toHaveStyle({ width: '100%' });
  });

  it('disables the input when isDisabled prop is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <TextField isDisabled />
      </ThemeProvider>,
    );

    const input = screen.getByTestId(TextFieldSelector.INPUT);
    expect(input).toBeDisabled();
  });

  it('marks input as required when isRequired is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <TextField isRequired />
      </ThemeProvider>,
    );

    const input = screen.getByTestId(TextFieldSelector.INPUT);
    expect(input).toBeRequired();
  });

  it('calls forwardRef correctly', () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <ThemeProvider themeName="standard">
        <TextField inputRef={ref} />
      </ThemeProvider>,
    );

    const input = screen.getByTestId(TextFieldSelector.INPUT);
    expect(ref.current).toBe(input);
  });

  it('applies monospaced font when isMonospaced is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <TextField isMonospaced />
      </ThemeProvider>,
    );

    const input = screen.getByTestId(TextFieldSelector.INPUT);
    expect(input).toHaveStyle(`font-family: ${Font.Monospace.split(', ').join(',')}`);
  });
});
