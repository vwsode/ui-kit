import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from '../Text';

import { ThemeProvider } from '../../../contexts/ThemeContext/ThemeContext';
import { MOCK_TEXT, MOCK_TEXT_TYPES } from './mocks';
import { TextSelector } from '../constants';
import { Colors } from '../../../themes/standard/colors';

describe('Text component:', () => {
  it('should render component with text', () => {
    render(
      <ThemeProvider themeName="standard">
        <Text accent="primary" type="page">
          {MOCK_TEXT}
        </Text>
      </ThemeProvider>,
    );

    const textElement = screen.getByTestId(TextSelector.TEXT);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(MOCK_TEXT);
  });

  it('should render with correct accent styles', () => {
    const { rerender } = render(
      <ThemeProvider themeName="standard">
        <Text accent="primary" type="greeting">
          {MOCK_TEXT}
        </Text>
      </ThemeProvider>,
    );

    const textElement = screen.getByTestId(TextSelector.TEXT);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(MOCK_TEXT);
    expect(textElement).toHaveStyle(`color: ${Colors.colorTextPrimary}`);

    rerender(
      <ThemeProvider themeName="standard">
        <Text accent="secondary" type="greeting">
          {MOCK_TEXT}
        </Text>
      </ThemeProvider>,
    );
    expect(textElement).toHaveStyle(`color: ${Colors.colorTextSecondary}`);

    rerender(
      <ThemeProvider themeName="standard">
        <Text accent="tertiary" type="greeting">
          {MOCK_TEXT}
        </Text>
      </ThemeProvider>,
    );
    expect(textElement).toHaveStyle(`color: ${Colors.colorTextTeritary}`);
  });

  it('should render with correct type styles', () => {
    const { rerender } = render(
      <ThemeProvider themeName="standard">
        <Text accent="primary" type="greeting">
          {MOCK_TEXT}
        </Text>
      </ThemeProvider>,
    );

    const textElement = screen.getByTestId(TextSelector.TEXT);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(MOCK_TEXT);

    MOCK_TEXT_TYPES.forEach(({ type, fontSize, lineHeight }) => {
      rerender(
        <ThemeProvider themeName="standard">
          <Text accent="tertiary" type={type}>
            {MOCK_TEXT}
          </Text>
        </ThemeProvider>,
      );
      expect(textElement).toHaveStyle(`font-size: ${fontSize}`);
      expect(textElement).toHaveStyle(`line-height: ${lineHeight}`);
    });
  });
});
