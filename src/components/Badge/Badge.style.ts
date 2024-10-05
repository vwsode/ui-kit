import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing, ThemeType } from '@/themes';
import { textBadge } from '@/themes/typography';
import { composeTestingPath } from '@/utils';

import { BadgeSelector } from './constants';
import { BadgeAppearance, StyledBadgeProps, StyledBadgeTextProps } from './types';

const getBadgeStyles = (appearance: BadgeAppearance, theme: ThemeType) => {
  const { colors } = theme;

  switch (appearance) {
    case 'default': {
      return css`
        background-color: ${colors.background.neutral.default};
        color: ${colors.text.default};
      `;
    }
    case 'added': {
      return css`
        background-color: ${colors.background.success.default};
        color: ${colors.text.default};
      `;
    }
    case 'important': {
      return css`
        background-color: ${colors.background.danger.bold.default};
        color: ${colors.text.inverse};
      `;
    }
    case 'primary-inverted': {
      return css`
        background-color: ${colors.elevation.surface.default};
        color: ${colors.text.brand};
      `;
    }
    case 'primary': {
      return css`
        background-color: ${colors.background.brand.bold.default};
        color: ${colors.text.inverse};
      `;
    }
    case 'removed': {
      return css`
        background-color: ${colors.background.danger.default};
      `;
    }
  }
};

export const StyledBadge = styled.div.attrs<StyledBadgeProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BadgeSelector.BADGE, testId),
}))<StyledBadgeProps>`
  padding: ${Spacing.XXS} ${Spacing.S_NUDGE};
  border-radius: ${Spacing.S};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ appearance, theme }) => getBadgeStyles(appearance, theme)}
`;

export const StyledBadgeText = styled.span.attrs<StyledBadgeTextProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BadgeSelector.BADGE_TEXT, testId),
}))<StyledBadgeTextProps>`
  ${textBadge}
  color: inherit;
`;
