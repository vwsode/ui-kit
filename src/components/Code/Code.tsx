import { FC } from 'react';

import { Root } from './Code.styles';

import type { CodeProps } from './types';

export const Code: FC<CodeProps> = ({ children, testId }) => {
  return <Root testId={testId}>{children}</Root>;
};

Code.displayName = 'Code';
