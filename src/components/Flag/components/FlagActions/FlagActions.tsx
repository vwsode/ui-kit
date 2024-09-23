import { FC } from 'react';

import { Actions } from './FlagActions.styles';

import type { FlagActionsProps } from './types';

export const FlagActions: FC<FlagActionsProps> = ({ children, testId }) => {
  return <Actions testId={testId}>{children}</Actions>;
};

FlagActions.displayName = 'FlagActions';
