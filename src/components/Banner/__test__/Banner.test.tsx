import { render, screen } from '@testing-library/react';
import React from 'react';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { Icon } from '../../../icons';
import { Banner } from '../Banner';
import { BannerSelector } from '../constants';

import { MOCK_CONTENT } from './mock';

describe('Banner component:', () => {
  it('should render component with text correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Banner appearance="announcement">{MOCK_CONTENT}</Banner>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(BannerSelector.BANNER)).toBeInTheDocument();
    expect(screen.getByTestId(BannerSelector.BANNER_CONTENT)).toHaveTextContent(MOCK_CONTENT);
  });

  it('should render component with icon prop', async () => {
    const ICON_TEST_ID = 'IconWarning';

    render(
      <ThemeProvider themeName="standard">
        <Banner appearance="announcement" icon={<Icon testId={ICON_TEST_ID} type="warning" size={20} />}>
          {MOCK_CONTENT}
        </Banner>
      </ThemeProvider>,
    );

    expect(screen.getByTestId(BannerSelector.BANNER)).toBeInTheDocument();
    expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(BannerSelector.BANNER_CONTENT)).toHaveTextContent(MOCK_CONTENT);
  });
});
