import { fireEvent, render, screen } from '@testing-library/react';

import { Link } from '../Link';
import { ThemeProvider } from '../../../contexts/ThemeContext';

import { Colors } from '../../../themes/standard/colors';
import { MOCK_TEXT, MOCK_LINK } from './mocks';
import { LinkSelector } from '../constants';

describe('Link component:', () => {
  it('should render the component with text correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Link to={MOCK_LINK}>{MOCK_TEXT}</Link>
      </ThemeProvider>,
    );

    const linkElement = screen.getByTestId(LinkSelector.LINK);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent(MOCK_TEXT);
  });

  it('should render the component with target attribute', () => {
    render(
      <ThemeProvider themeName="standard">
        <Link to={MOCK_LINK} target="_blank">
          {MOCK_TEXT}
        </Link>
      </ThemeProvider>,
    );

    const linkElement = screen.getByTestId(LinkSelector.LINK);
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('should disable the component when disabled prop is true', () => {
    render(
      <ThemeProvider themeName="standard">
        <Link to={MOCK_LINK} disabled>
          {MOCK_TEXT}
        </Link>
      </ThemeProvider>,
    );

    const linkElement = screen.getByTestId(LinkSelector.LINK);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle(`cursor: default`);
    expect(linkElement).toHaveStyle(`color: ${Colors.colorLinkDisabled}`);
    fireEvent.click(linkElement);
  });
});
