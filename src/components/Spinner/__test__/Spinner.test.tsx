import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { SpinnerSelector } from '../constants';
import { Spinner } from '../Spinner';

describe('Link component:', () => {
  it('should render the component with text correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Spinner size="medium" />
      </ThemeProvider>,
    );

    const spinner = screen.getByTestId(SpinnerSelector.SPINNER);
    expect(spinner).toBeInTheDocument();
  });
});
