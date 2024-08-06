import { render, screen } from '@testing-library/react';
import React from 'react';

import { ProgressBar } from '../';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { ProgressBarSelector } from '../constants';

describe('ProgressBar component: ', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <ProgressBar value={20} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ProgressBarSelector.PROGRESS_BAR)).toBeInTheDocument();
    expect(screen.getByTestId(ProgressBarSelector.PROGRESS)).toHaveStyle('width: 20%');
  });

  it('should render component with isIndeterminate prop', () => {
    render(
      <ThemeProvider themeName="standard">
        <ProgressBar isIndeterminate />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(ProgressBarSelector.PROGRESS_BAR)).toBeInTheDocument();
    expect(screen.getByTestId(ProgressBarSelector.PROGRESS_INDETERMINATE)).toBeInTheDocument();
  });
});
