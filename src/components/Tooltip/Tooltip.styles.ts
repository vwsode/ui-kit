import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Font, FontSize, FontWeight, Layer, LineHeight, Spacing } from '@/themes';
import { composeTestingPath } from '@/utils';

import { TooltipSelector } from './constants';
import { StyledTooltipProps } from './types';

const TOOLTIP_TRUNCATION_WIDTH = 420;
const TOOLTIP_WIDTH = 240;

export const StyledTooltip = styled.div.attrs<StyledTooltipProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TooltipSelector.ROOT, testId),
}))<StyledTooltipProps>`
  background-color: ${({ theme }) => theme.colors.background.neutral.bold.default};
  color: ${({ theme }) => theme.colors.text.inverse};

  padding: ${Spacing.XXS} ${Spacing.S_NUDGE};
  border-radius: ${BorderRadius.MEDIUM};
  max-width: ${({ truncate }) => (truncate ? TOOLTIP_TRUNCATION_WIDTH : TOOLTIP_WIDTH)}px;

  text-align: left;
  z-index: ${Layer.Tooltip};
  pointer-events: none;

  font-size: ${FontSize.XXS};
  line-height: ${LineHeight.XXS};
  font-family: ${Font.Base};
  font-weight: ${FontWeight.Normal};

  ${({ truncate }) =>
    truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  &[data-popper-placement^='top'] {
    margin-bottom: ${Spacing.S};
  }

  &[data-popper-placement^='bottom'] {
    margin-top: ${Spacing.S};
  }

  &[data-popper-placement^='left'] {
    margin-right: ${Spacing.S};
  }

  &[data-popper-placement^='right'] {
    margin-left: ${Spacing.S};
  }
`;
