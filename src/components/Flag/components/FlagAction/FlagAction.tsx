import { ElementType, ComponentProps } from 'react';

import { Action } from './FlagAction.styles';

import type { FlagActionProps } from './types';

export const FlagAction = <C extends ElementType = 'button'>(
  props: FlagActionProps<C> & Omit<ComponentProps<C>, keyof FlagActionProps<C>>,
) => {
  const { children, component: Component = 'button', testId, ...rest } = props;

  return (
    <Action as={Component as ElementType} testId={testId} {...rest}>
      {children}
    </Action>
  );
};

FlagAction.displayName = 'FlagAction';
