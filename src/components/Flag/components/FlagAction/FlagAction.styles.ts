import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Spacing, StrokeWidth } from '@/themes';
import { textFlagAction } from '@/themes/typography';
import { composeTestingPath } from '@/utils';

import { FlagSelector } from '../Flag/constants';

import type { StyledFlagActionProps } from './types';

const ACTION_HEIGHT = 24;

export const Action = styled.button.attrs<StyledFlagActionProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(FlagSelector.ACTION, testId),
}))<StyledFlagActionProps>`
  cursor: pointer;
  outline: none;

  ${textFlagAction}

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: ${ACTION_HEIGHT}px;
  padding: 0 ${Spacing.S};
  border: none;
  border-radius: ${BorderRadius.SMALL};

  background-color: ${({ theme }) => theme.colors.background.inverse.subtle.default};
  color: inherit;

  text-decoration: none;
  white-space: nowrap;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  &:hover {
    text-decoration: underline;
    background-color: ${({ theme }) => theme.colors.background.inverse.subtle.hover};
  }

  &:focus-visible {
    outline: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.border.focused};
    outline-offset: ${Spacing.XXS};
    position: relative;
  }

  &:active {
    text-decoration: underline;
    background-color: ${({ theme }) => theme.colors.background.inverse.subtle.press};
  }
`;
