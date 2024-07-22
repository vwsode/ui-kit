import React, { FC } from 'react';
import type { Preview } from '@storybook/react';

import { GlobalStyles, ThemeProvider } from '../src';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: FC) => {
      return (
        <ThemeProvider themeName="standard">
          <GlobalStyles>
            <Story />
          </GlobalStyles>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
