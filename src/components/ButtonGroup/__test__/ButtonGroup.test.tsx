import { render, screen } from '@testing-library/react';

import { Button } from '@/components/Button';
import { ButtonSelector } from '@/components/Button/constants';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { composeTestingPath } from '@/utils';

import { ButtonGroup } from '../ButtonGroup';
import { ButtonGroupSelector } from '../constants';

describe('ButtonGroup component: ', () => {
  it('should applies horizontal direction by default', () => {
    render(
      <ThemeProvider themeName="standard">
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ButtonGroupSelector.GROUP)).toHaveStyle({ 'flex-direction': 'row' });
  });

  it('should applies vertical direction when specified', () => {
    render(
      <ThemeProvider themeName="standard">
        <ButtonGroup label="Group label" direction="vertical">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(screen.getByTestId(ButtonGroupSelector.GROUP)).toHaveStyle({ 'flex-direction': 'column' });
  });

  it('should renders fullWidth when the prop is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <ButtonGroup label="Group label" fullWidth>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ButtonGroupSelector.GROUP)).toHaveStyle({ width: '100%' });
  });

  it('should renders component correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <ButtonGroup label="Group label">
          <Button testId="ButtonFirst">Button 1</Button>
          <Button testId="ButtonSecond">Button 2</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(composeTestingPath(ButtonSelector.BUTTON, 'ButtonFirst'))).toBeInTheDocument();
    expect(screen.getByTestId(composeTestingPath(ButtonSelector.BUTTON, 'ButtonSecond'))).toBeInTheDocument();
  });
});
