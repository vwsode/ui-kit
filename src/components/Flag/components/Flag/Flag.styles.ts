import { isString } from 'lodash';
import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { IconWrapper } from '@/icons/Icon.style';
import { BorderRadius, Duration, Shadow, Spacing, StrokeWidth, ThemeType } from '@/themes';
import { textFlagTitle } from '@/themes/typography';
import { composeTestingPath } from '@/utils';

import { FlagSelector } from './constants';

import type { FlagAppearance, StyledButtonIconProps, StyledExpendedAreaProps, StyledFlagProps } from './types';

const getFlagAppearanceStyles = (appearance: FlagAppearance, theme: ThemeType) => {
  const { colors } = theme;

  switch (appearance) {
    case 'normal': {
      return css`
        background-color: ${colors.elevation.surface.overlay.default};
        color: ${colors.text.subtle};
      `;
    }
    case 'success': {
      return css`
        background-color: ${colors.background.success.bold.default};
        color: ${colors.text.inverse};
      `;
    }
    case 'warning': {
      return css`
        background-color: ${colors.background.warning.bold.default};
        color: ${colors.text.warning.inverse};
      `;
    }
    case 'info': {
      return css`
        background-color: ${colors.background.neutral.bold.default};
        color: ${colors.text.inverse};
      `;
    }
    case 'error': {
      return css`
        background-color: ${colors.background.danger.bold.default};
        color: ${colors.text.inverse};
      `;
    }
  }
};

const FLAG_WIDTH = 368;

export const Root = styled.div.attrs<StyledFlagProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(FlagSelector.FLAG, testId),
}))<StyledFlagProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : `${FLAG_WIDTH}px`)};
  border-radius: ${BorderRadius.SMALL};
  overflow: hidden;
  padding: ${Spacing.L};
  display: flex;
  box-shadow: ${Shadow.XS};
  gap: ${Spacing.L};

  ${({ appearance, theme }) => getFlagAppearanceStyles(appearance, theme)};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExpandedArea = styled.div<StyledExpendedAreaProps>`
  ${({ isExpanded, maxHeight }) => {
    if (!isExpanded) {
      return css`
        overflow: hidden;
        max-height: 0;
      `;
    }

    if (isString(maxHeight)) {
      return 'max-height: max-height;';
    } else {
      return css`
        max-height: ${maxHeight}px;
      `;
    }
  }}

  transition: max-height ${Duration.Default}ms ease-in-out;
`;

export const FlagHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing.S};

  ${IconWrapper} {
    align-self: flex-start;
    flex-shrink: 0;
  }
`;

export const FlagTitle = styled.span`
  ${textFlagTitle}
  width: 100%;
  padding: ${Spacing.XXS} 0 ${Spacing.S_NUDGE} 0;
`;

export const ButtonIcon = styled.button<StyledButtonIconProps>`
  margin-left: auto;

  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  padding: 0;
  border: none;

  border-radius: ${BorderRadius.SMALL};
  background-color: transparent;
  color: inherit;

  &:focus-visible {
    outline: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.colorBorderFocused};
    outline-offset: ${Spacing.XXS};
    position: relative;
  }

  ${IconWrapper} {
    transform: rotate(${({ isExpanded }) => (isExpanded ? 180 : 0)}deg);

    transition-property: transform;
    transition-duration: ${Duration.Default}ms;
  }
`;
