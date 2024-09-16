import { FC, MouseEvent } from 'react';

import { Icon } from '@/icons';
import { composeTestingPath } from '@/utils';

import { NavigatorSelector } from './constants';
import { NavigatorButton } from './Navigator.styles';

import type { NavigatorProps } from './types';

export const Navigator: FC<NavigatorProps> = ({ direction, testId, onClick, isDisabled = false }) => {
  const handleClick = (event: MouseEvent) => {
    onClick?.(event as MouseEvent<HTMLButtonElement>, direction);
  };

  return (
    <NavigatorButton
      onClick={handleClick}
      appearance="subtle"
      testId={composeTestingPath(NavigatorSelector.NAVIGATOR, testId)}
      iconOnly
      isDisabled={isDisabled}
    >
      <Icon type={direction === 'prev' ? 'chevron-left' : 'chevron-right'} size={24} />
    </NavigatorButton>
  );
};

Navigator.displayName = 'Pagination.Navigator';
