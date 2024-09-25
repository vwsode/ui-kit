import { Children, FC, ReactNode } from 'react';

import { FlagSelector } from '../Flag/constants';

import { Actions, Dot } from './FlagActions.styles';

import type { FlagActionsProps } from './types';

export const FlagActions: FC<FlagActionsProps> = ({ children, testId }) => {
  const actionsWithDot = Children.toArray(children).reduce((acc: ReactNode[], current: ReactNode, index) => {
    acc.push(current);
    if (index < Children.count(children) - 1) {
      acc.push(<Dot key={`${FlagSelector.ACTIONS_DOT}-${index}`}>·</Dot>);
    }
    return acc;
  }, []);

  return <Actions testId={testId}>{actionsWithDot}</Actions>;
};

FlagActions.displayName = 'FlagActions';
