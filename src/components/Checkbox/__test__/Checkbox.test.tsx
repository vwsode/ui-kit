import { render, screen, fireEvent } from '@testing-library/react';

import { ThemeProvider } from '@/contexts/ThemeContext';

import { Checkbox } from '../Checkbox';
import { CheckboxSelector } from '../constants';

describe('Checkbox component: ', () => {
  const getCheckboxElement = (): HTMLElement => screen.getByTestId(CheckboxSelector.CHECKBOX);
  const getTextElement = (): HTMLElement => screen.getByTestId(CheckboxSelector.TEXT);
  const getRequiredSymbol = (): HTMLElement => screen.getByTestId(CheckboxSelector.REQUIRED_SYMBOL);

  it('renders label correctly when provided', () => {
    const MOCK_LABEL = 'Test Label';

    render(
      <ThemeProvider themeName="standard">
        <Checkbox label={MOCK_LABEL} />
      </ThemeProvider>,
    );

    expect(getTextElement()).toBeInTheDocument();
    expect(getTextElement()).toHaveTextContent(MOCK_LABEL);
  });

  it('renders without label when label prop is not provided', () => {
    render(
      <ThemeProvider themeName="standard">
        <Checkbox />
      </ThemeProvider>,
    );

    expect(screen.queryByTestId(CheckboxSelector.TEXT)).not.toBeInTheDocument();
  });

  it('checkbox is checked when "isChecked" prop is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Checkbox isChecked={true} />
      </ThemeProvider>,
    );

    expect(getCheckboxElement()).toBeChecked();
  });

  it('checkbox is unchecked when "isChecked" prop is false', () => {
    render(
      <ThemeProvider themeName="standard">
        <Checkbox isChecked={false} />
      </ThemeProvider>,
    );

    expect(getCheckboxElement()).not.toBeChecked();
  });

  it('checkbox changes state on user click', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Checkbox onChange={handleChange} />
      </ThemeProvider>,
    );

    fireEvent.click(getCheckboxElement());
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onChange when checkbox value changes', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Checkbox onChange={handleChange} />
      </ThemeProvider>,
    );

    fireEvent.click(getCheckboxElement());
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { checked: true } }));
  });

  it('calls onBlur when checkbox loses focus', () => {
    const handleBlur = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Checkbox onBlur={handleBlur} />
      </ThemeProvider>,
    );

    fireEvent.blur(getCheckboxElement());
    expect(handleBlur).toHaveBeenCalled();
  });

  it('disables the checkbox when "isDisabled" prop is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Checkbox isDisabled={true} />
      </ThemeProvider>,
    );

    expect(getCheckboxElement()).toBeDisabled();
  });

  it('renders required symbol when "isRequired" is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Checkbox label="Required Test" isRequired={true} />
      </ThemeProvider>,
    );

    expect(getRequiredSymbol()).toBeInTheDocument();
  });

  it('adds name and value attributes if they are provided', () => {
    render(
      <ThemeProvider themeName="standard">
        <Checkbox name="testName" value="testValue" />
      </ThemeProvider>,
    );
    expect(getCheckboxElement()).toHaveAttribute('name', 'testName');
    expect(getCheckboxElement()).toHaveAttribute('value', 'testValue');
  });
});
