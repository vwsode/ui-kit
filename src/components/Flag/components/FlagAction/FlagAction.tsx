import React, { FC } from 'react';

import type { FlagActionProps } from './types';

export const FlagAction: FC<FlagActionProps> = ({ children }) => {
  return <div>{children}</div>;
};

FlagAction.displayName = 'FlagAction';
