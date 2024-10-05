import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { Badge } from '../Badge';
import { BadgeSelector, DEFAULT_MAX_BADGE_VALUE } from '../constants';

import { MOCK_MIN_VALUE, MOCK_VALUE } from './mock';

describe('Badge component:', () => {
  it('should render with value correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Badge appearance="default" value={MOCK_MIN_VALUE} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(BadgeSelector.BADGE)).toBeInTheDocument();
    expect(screen.getByTestId(BadgeSelector.BADGE_TEXT)).toHaveTextContent(MOCK_MIN_VALUE.toString());
  });

  it('should render with default max value when value exceeds default max', () => {
    render(
      <ThemeProvider themeName="standard">
        <Badge appearance="default" value={MOCK_VALUE} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(BadgeSelector.BADGE)).toBeInTheDocument();
    expect(screen.getByTestId(BadgeSelector.BADGE_TEXT)).toHaveTextContent(`${DEFAULT_MAX_BADGE_VALUE}+`);
  });

  it('should render with max value when value exceeds specified max', () => {
    const max = 20;

    render(
      <ThemeProvider themeName="standard">
        <Badge appearance="default" value={MOCK_VALUE} max={max} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(BadgeSelector.BADGE)).toBeInTheDocument();
    expect(screen.getByTestId(BadgeSelector.BADGE_TEXT)).toHaveTextContent(`${max}+`);
  });

  it('should render with value correctly when max is set to false', () => {
    render(
      <ThemeProvider themeName="standard">
        <Badge appearance="default" value={MOCK_VALUE} max={false} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId(BadgeSelector.BADGE)).toBeInTheDocument();
    expect(screen.getByTestId(BadgeSelector.BADGE_TEXT)).toHaveTextContent(MOCK_VALUE.toString());
  });
});
