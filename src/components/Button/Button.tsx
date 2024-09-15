import { isString } from 'lodash';
import { FC } from 'react';

import { Spinner } from '@/components/Spinner';
import { Icon, IconVariant } from '@/icons';

import { Root } from './Button.style.ts';
import { ButtonIconSpacingMap, ButtonSelector } from './constants.ts';

import type { BaseButtonProps } from './types.ts';

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
                                              ...props
                                            }) => {

  const renderContent = () => {
    if (isLoading) {
      return <Spinner testId={ButtonSelector.BUTTON_SPINNER} size={ButtonIconSpacingMap[spacing]} />;
    }

    if (icon) {
      return isString(icon)
        ? <Icon testId={ButtonSelector.BUTTON_ICON} type={icon as IconVariant} size={24} />
        : icon;
    }

    return children;
  };

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
      disabled={isDisabled}
      {...props}
    >
      {renderContent()}
    </Root>
  );
};

Button.displayName = 'Button';
