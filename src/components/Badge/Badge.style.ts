import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { Spacing } from '../../themes';
import { Colors } from '../../themes/standard/colors';
import { textBadge } from '../../themes/typography';
import { composeTestingPath } from '../../utils';

import { BadgeSelector } from './constants';
import { StyledBadgeProps, StyledBadgeTextProps } from './types';

const getBadgeStyles = (type: StyledBadgeProps['appearance']) => {
  switch (type) {
    case 'default': {
      return css`
        background-color: ${Colors.colorBadgeDefaultBg};
        color: ${Colors.colorBadgeDefaultText};
      `;
    }
    case 'added': {
      return css`
        background-color: ${Colors.colorBadgeAddedBg};
        color: ${Colors.colorBadgeAddedText};
      `;
    }
    case 'important': {
      return css`
        background-color: ${Colors.colorBadgeImportantBg};
        color: ${Colors.colorBadgeImportantText};
      `;
    }
    case 'primary': {
      return css`
        background-color: ${Colors.colorBadgePrimaryBg};
        color: ${Colors.colorBadgePrimaryText};
      `;
    }
    case 'primary-inverted': {
      return css`
        background-color: ${Colors.colorBadgePrimaryInvertBg};
        color: ${Colors.colorBadgePrimaryInvertText};
      `;
    }
    case 'removed': {
      return css`
        background-color: ${Colors.colorBadgeRemovedBg};
        color: ${Colors.colorBadgeRemovedText};
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
  ${({ appearance }) => getBadgeStyles(appearance)}
`;

export const StyledBadgeText = styled.span.attrs<StyledBadgeTextProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BadgeSelector.BAGDE_TEXT, testId),
}))<StyledBadgeTextProps>`
  ${textBadge}
  color: inherit;
`;
