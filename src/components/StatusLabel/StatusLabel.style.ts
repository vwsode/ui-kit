import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { BorderRadius, Spacing } from '../../themes';
import { Colors } from '../../themes/standard/colors';

import { StatusLabelSelector } from './constants';
import { StyledStatusLabelProps } from './types';

const colorStatusMap: Record<
  StyledStatusLabelProps['type'],
  {
    backgroundColor?: string;
    color: string;
  }
> = {
  critical: {
    backgroundColor: Colors.colorStatusLabelCriticalBg,
    color: Colors.colorStatusLabelCriticalText,
  },
  error: {
    color: Colors.colorStatusLabelError,
  },
  warning: {
    color: Colors.colorStatusLabelWarning,
  },
  success: {
    color: Colors.colorStatusLabelSuccess,
  },
  info: {
    color: Colors.colorStatusLabelInfo,
  },
};

const getStatusLabelStyles = (type: StyledStatusLabelProps['type']) => {
  return css`
    background-color: ${colorStatusMap[type].backgroundColor || 'initial'};
    color: ${colorStatusMap[type]?.color || 'initial'};
  `;
};

export const StyledStatusLabel = styled.div.attrs<StyledStatusLabelProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: StatusLabelSelector.STATUS_LABEL + testId,
}))<StyledStatusLabelProps>`
  ${({ type }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${Spacing.XS};

    ${type === 'critical' &&
    css`
      padding: ${Spacing.S_NUDGE} ${Spacing.M};
      border-radius: ${BorderRadius.MEDIUM};
    `}

    ${getStatusLabelStyles(type)};
  `}
`;

