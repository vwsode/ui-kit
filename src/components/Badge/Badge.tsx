import React, { FC } from 'react';

import { StyledBadge, StyledBadgeText } from './Badge.style';
import { DEFAULT_MAX_BADGE_VALUE } from './constants';
import { BadgeProps } from './types';

export const Badge: FC<BadgeProps> = ({ appearance, value, testId, max = DEFAULT_MAX_BADGE_VALUE }) => {
  const displayValue = max && value > Number(max) ? max : value;
  const showPlusSign = max && value > Number(max);

  return (
    <StyledBadge appearance={appearance} testId={testId}>
      <StyledBadgeText testId={testId}>
        {displayValue}
        {showPlusSign && '+'}
      </StyledBadgeText>
    </StyledBadge>
  );
};

Badge.displayName = 'Badge';
