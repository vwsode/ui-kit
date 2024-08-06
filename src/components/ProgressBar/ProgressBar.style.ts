import styled, { keyframes, css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { BorderRadius, Spacing } from '../../themes';
import { Colors } from '../../themes/standard/colors';
import { composeTestingPath } from '../../utils';

import { ProgressBarSelector } from './constants';
import { StyledRootProps, StyledProgressProps, ProgressBarAppearance } from './types';

const colorMap: Record<ProgressBarAppearance, { bgMain: string; bgProgress: string }> = {
  default: {
    bgMain: Colors.colorProgressBarDefaultBg,
    bgProgress: Colors.colorProgressBarDefaultProgress,
  },
  inverse: {
    bgMain: Colors.colorProgressBarInverseBg,
    bgProgress: Colors.colorProgressBarInverseProgress,
  },
  success: {
    bgMain: Colors.colorProgressBarSuccessBg,
    bgProgress: Colors.colorProgressBarSuccessProgress,
  },
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
  background-color: ${({ appearance }) => colorMap[appearance].bgMain};
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
  background-color: ${({ appearance }) => colorMap[appearance].bgProgress};

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      animation: 2s ease 0.5s infinite normal none running ${loadingFrames};
    `}
`;
