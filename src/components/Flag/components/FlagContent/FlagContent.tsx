import React, { FC } from 'react';

import { Content } from './FlagContent.styles';

import type { FlagContentProps } from './types';

export const FlagContent: FC<FlagContentProps> = ({ children, testId }) => {
  return <Content testId={testId}>{children}</Content>;
};

FlagContent.displayName = 'FlagContent';
