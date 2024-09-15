import { isString } from 'lodash';
import { FC } from 'react';

import { Spinner } from '@/components/Spinner';
import { Icon, IconVariant } from '@/icons';

import { Root } from './Button.style.ts';
import { ButtonIconSpacingMap } from './constants.ts';
import { BaseButtonProps } from './types.ts';

export const Button: FC<BaseButtonProps> = ({
  children,
  icon,
  spacing = 'default',
  appearance = 'default',
  fullWidth = false,
  isDisabled = false,
  iconOnly = false,
  isSelected = false,
  isLoading = false,
  testId,
}) => {
  return (
    <Root
      fullWidth={fullWidth}
      isDisabled={isDisabled}
      iconOnly={iconOnly}
      isSelected={isSelected}
      isLoading={isLoading}
      appearance={appearance}
      spacing={spacing}
      testId={testId}
    >
      {isLoading ? <Spinner size={ButtonIconSpacingMap[spacing]} /> : children}
      {!isLoading && (isString(icon) ? <Icon type={icon as IconVariant} size={24} /> : icon)}
    </Root>
  );
};

Button.displayName = 'Button';
