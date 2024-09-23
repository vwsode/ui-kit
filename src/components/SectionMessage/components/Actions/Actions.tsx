import { FC, Children, ReactNode } from 'react';

import { Dot, Root } from './Actions.styles';

import type { ActionsProps } from './types';

export const Actions: FC<ActionsProps> = ({ children, testId }) => {
  const actionsWithDot = Children.toArray(children).reduce((acc: ReactNode[], current, index) => {
    acc.push(current);
    if (index < Children.count(children) - 1) {
      acc.push(<Dot key={`dot-${index}`}>·</Dot>);
    }
    return acc;
  }, []);

  return <Root testId={testId}>{actionsWithDot}</Root>;
};

Actions.displayName = 'SectionMessage.Actions';
