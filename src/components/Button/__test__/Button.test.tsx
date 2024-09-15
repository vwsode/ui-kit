import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { Icon } from '@/icons';
import { composeTestingPath } from '@/utils';
import { SpinnerSelector } from '@components/Spinner';

import { Button } from '../Button';
import { ButtonSelector } from '../constants.ts';

describe('Button component: ', () => {
  it('should renders children correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Button>Click me</Button>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ButtonSelector.BUTTON)).toBeInTheDocument();
  });

  it('should renders Spinner when isLoading is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Button isLoading />
      </ThemeProvider>,
    );

    expect(
      screen.getByTestId(composeTestingPath(SpinnerSelector.SPINNER, ButtonSelector.BUTTON_SPINNER)),
    ).toBeInTheDocument();
  });

  it('should renders icon when icon is a string', () => {
    render(
      <ThemeProvider themeName="standard">
        <Button icon="more" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ButtonSelector.BUTTON_ICON)).toBeInTheDocument();
  });

  it('should renders provided icon when icon is a React element', () => {
    render(
      <ThemeProvider themeName="standard">
        <Button icon={<Icon testId={ButtonSelector.BUTTON_ICON} type="editor-done" size={24} />} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ButtonSelector.BUTTON_ICON)).toBeInTheDocument();
  });

  it('should applies fullWidth style correctly', () => {
    const { container } = render(
      <ThemeProvider themeName="standard">
        <Button fullWidth />
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyle('width: 100%');
  });

  it('should applies isDisabled style correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Button isDisabled />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ButtonSelector.BUTTON)).toBeDisabled();
  });

  it('should handles click events', () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Button onClick={handleClick}>Click me</Button>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId(ButtonSelector.BUTTON));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
