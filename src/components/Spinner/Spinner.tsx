import React, { FC } from 'react';

import { Colors } from '../../themes/standard/colors';
import { composeTestingPath } from '../../utils';

import { SpinnerSelector } from './constants';
import { StyledSpinner } from './Spinner.style';
import { SpinnerProps, SpinnerSizeMap } from './types';

export const Spinner: FC<SpinnerProps> = ({ size = 'medium', testId }) => {
  return (
    <StyledSpinner
      type="spinner"
      fill={Colors.colorSpinner}
      size={SpinnerSizeMap[size]}
      testId={composeTestingPath(SpinnerSelector.SPINNER, testId)}
    />
  );
};

Spinner.displayName = 'Spinner';
