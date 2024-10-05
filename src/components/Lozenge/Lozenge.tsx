import React, { FC } from 'react';

import { StyledLozenge, StyledLozengeText } from './Lozenge.style';
import { LozengeProps } from './types';

export const Lozenge: FC<LozengeProps> = ({
  appearance = 'default',
  isBold = false,
  children,
  maxWidth = 200,
  ...props
}) => {
  return (
    <StyledLozenge maxWidth={maxWidth} appearance={appearance} isBold={isBold} {...props}>
      <StyledLozengeText maxWidth={maxWidth}>{children}</StyledLozengeText>
    </StyledLozenge>
  );
};

Lozenge.displayName = 'Lozenge';
