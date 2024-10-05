import styled, { css, keyframes } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Spacing, ThemeType } from '@/themes';
import { composeTestingPath } from '@/utils';

import { ProgressBarSelector } from './constants';

import type { ProgressBarAppearance, StyledProgressProps, StyledRootProps } from './types';

const getProgressBarStyles = (appearance: ProgressBarAppearance, theme: ThemeType) => {
  const { colors } = theme;

  switch (appearance) {
    case 'default': {
      return colors.background.neutral.default;
    }
    case 'inverse': {
      return colors.background.inverse.subtle.default;
    }
    case 'success': {
      return colors.background.success.bold.default;
    }
  }
};

const getProgressStyles = (appearance: ProgressBarAppearance, theme: ThemeType) => {
  const { colors } = theme;

  switch (appearance) {
    case 'default': {
      return colors.background.neutral.bold.default;
    }
    case 'inverse': {
      return colors.elevation.surface.default;
    }
    case 'success': {
      return colors.background.success.bold.default;
    }
  }
};

export const loadingFrames = keyframes`
0% {
    left: -80%;
    width: 80%;
}
100% {
    left: 110%;
    width: 10%;
}
`;

export const Root = styled.div.attrs<StyledRootProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(ProgressBarSelector.PROGRESS_BAR, testId),
}))<StyledRootProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${BorderRadius.SMALL};
  background-color: ${({ theme, appearance }) => getProgressBarStyles(appearance, theme)};
  height: ${Spacing.S_NUDGE};
`;

export const Progress = styled.span.attrs<StyledProgressProps>(({ testId, isIndeterminate }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(
    !isIndeterminate ? ProgressBarSelector.PROGRESS : ProgressBarSelector.PROGRESS_INDETERMINATE,
    testId,
  ),
}))<StyledProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ value }) => `${Math.min(value, 100)}%`};
  border-radius: ${BorderRadius.SMALL};
  background-color: ${({ appearance, theme }) => getProgressStyles(appearance, theme)};

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      animation: 2s ease 0.5s infinite normal none running ${loadingFrames};
    `}
`;
