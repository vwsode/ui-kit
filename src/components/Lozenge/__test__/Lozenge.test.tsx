import { screen, render } from '@testing-library/react';
import React from 'react';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { LozengeSelector } from '../constants';
import { Lozenge } from '../Lozenge';

import { MOCK_LONG_TEXT, MOCK_TEXT } from './mock';

describe('Lozenge component:', () => {
  const getLozenge = () => {
    return screen.getByTestId(LozengeSelector.LOZENGE);
  };

  const getLozengeText = () => {
    return screen.getByTestId(LozengeSelector.LOZENGE_TEXT);
  };

  it('should render component with text correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Lozenge appearance="default">{MOCK_TEXT}</Lozenge>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(LozengeSelector.LOZENGE)).toBeInTheDocument();
    expect(screen.getByTestId(LozengeSelector.LOZENGE_TEXT)).toHaveTextContent(MOCK_TEXT);
  });

  it('should apply maxWidth style when maxWidth prop is provided', () => {
    const maxWidth = 100;

    render(
      <ThemeProvider themeName="standard">
        <Lozenge appearance="default" maxWidth={maxWidth}>
          {MOCK_LONG_TEXT}
        </Lozenge>
      </ThemeProvider>,
    );

    const lozenge = getLozenge();
    const lozengeText = getLozengeText();

    expect(lozenge).toBeInTheDocument();
    expect(lozengeText).toHaveStyle(`max-width: ${maxWidth}px`);
  });

  it('should have default maxWidth style when maxWidth prop is not provided', () => {
    render(
      <ThemeProvider themeName="standard">
        <Lozenge appearance="default">{MOCK_LONG_TEXT}</Lozenge>
      </ThemeProvider>,
    );

    const lozenge = getLozenge();
    const lozengeText = getLozengeText();

    expect(lozenge).toBeInTheDocument();
    expect(lozengeText).toHaveStyle(`max-width: 200px`);
  });
});
