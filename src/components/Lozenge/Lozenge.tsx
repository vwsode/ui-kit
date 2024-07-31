import React, { FC } from 'react';

import { StyledLozenge, StyledLozengeText } from './Lozenge.style';
import { LozengeProps } from './types';

export const Lozenge: FC<LozengeProps> = ({ children, maxWidth = 200, ...props }) => {
  return (
    <StyledLozenge maxWidth={maxWidth} {...props}>
      <StyledLozengeText maxWidth={maxWidth}>{children}</StyledLozengeText>
    </StyledLozenge>
  );
};

Lozenge.displayName = 'Lozenge';
