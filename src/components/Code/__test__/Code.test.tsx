import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/contexts/ThemeContext';

import { Code } from '../Code';
import { CodeSelector } from '../constants';

describe('Code component: ', () => {
  it('should render component with text correctly', () => {
    const MOCKED_CODE = 'npm install';

    render(
      <ThemeProvider themeName="standard">
        <Code>{MOCKED_CODE}</Code>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(CodeSelector.CODE)).toBeInTheDocument();
    expect(screen.getByTestId(CodeSelector.CODE)).toHaveTextContent(MOCKED_CODE);
  });
});
