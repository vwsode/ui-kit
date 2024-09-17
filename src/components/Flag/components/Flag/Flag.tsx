import { FC } from 'react';

import type { FlagProps } from './types';

export const Flag: FC<FlagProps> = ({ children, appearance = 'normal' }) => {
  return <div>{children}</div>;
};

Flag.displayName = 'Flag';
