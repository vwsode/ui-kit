import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Text } from '../Text';
import { ThemeProvider } from '../../../contexts/ThemeContext/ThemeContext';

import { MOCK_TEXT } from './mocks';
import { TextSelector } from '../constants';

describe('Text component', () => {
  it('should render component with text', async () => {
    render(
      <ThemeProvider themeName="standard">
        <Text accent="primary" type="page">
          {MOCK_TEXT}
        </Text>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(TextSelector.TEXT)).toHaveTextContent(MOCK_TEXT);
    expect(screen.getByTestId(TextSelector.TEXT)).toBeInTheDocument();
  });
});
