import { FC } from 'react';

import { Root } from './ButtonGroup.style';

import type { ButtonGroupProps } from './types';

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  label,
  testId,
  direction = 'horizontal',
  fullWidth = false,
}) => {
  return (
    <Root aria-label={label} direction={direction} fullWidth={fullWidth} testId={testId}>
      {children}
    </Root>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
