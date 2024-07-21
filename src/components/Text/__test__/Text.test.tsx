import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from '../Text';

import { ThemeProvider } from '../../../contexts/ThemeContext/ThemeContext';
import { MOCK_TEXT } from './mocks';
import { TextSelector } from '../constants';
import { Colors } from '../../../themes/standard/colors';
import { FontSize, LineHeight } from '../../../themes';
import { TextType } from '../types';

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

    const types: { type: TextType; fontSize: string; lineHeight: string }[] = [
      { type: 'greeting', fontSize: FontSize.XXL, lineHeight: LineHeight.XXL },
      { type: 'page', fontSize: FontSize.XL, lineHeight: LineHeight.XL },
      { type: 'email-header', fontSize: FontSize.L, lineHeight: LineHeight.L },
      { type: 'page-header', fontSize: FontSize.M, lineHeight: LineHeight.M },
      { type: 'subject', fontSize: FontSize.S, lineHeight: LineHeight.S },
      { type: 'button', fontSize: FontSize.XS, lineHeight: LineHeight.XS },
      { type: 'caption', fontSize: FontSize.XXS, lineHeight: LineHeight.XXS },
    ];

    types.forEach(({ type, fontSize, lineHeight }) => {
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
