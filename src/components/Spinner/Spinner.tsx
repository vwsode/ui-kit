import React, { FC } from 'react';
import { useTheme } from 'styled-components';

import { ThemeType } from '@/themes';

import { composeTestingPath } from '../../utils';

import { SpinnerSelector } from './constants';
import { StyledSpinner } from './Spinner.style';
import { type SpinnerProps, SpinnerSizeMap } from './types';

export const Spinner: FC<SpinnerProps> = ({ size = 'medium', testId }) => {
  const theme = useTheme() as ThemeType;

  return (
    <StyledSpinner
      type="spinner"
      fill={theme.colors.icon.subtle}
      size={SpinnerSizeMap[size]}
      testId={composeTestingPath(SpinnerSelector.SPINNER, testId)}
    />
  );
};

Spinner.displayName = 'Spinner';
